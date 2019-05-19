import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataStorageService} from '../../services/data-storage.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { comentario } from '../../interfaces/comentario.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { calificacion } from '../../interfaces/calificacion.interfaces';
import { LoginService } from '../../services/login.service';
import { SitioServiceService } from '../../services/sitiosServices/sitio-service.service';
import { CalificacionesServiceService } from '../../services/calificacionesService/calificaciones-service.service';
import { RespuestasServiceService } from '../../services/respuestasService/respuestas-service.service';
import { Respuesta } from '../../interfaces/respuesta.interface';
import swal from 'sweetalert';



@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.css']
})
export class SitioComponent implements OnInit {
  sitioId:string;
  sitios:any[] = []; 
  imgsSitio:any[] = [];
  resenas:comentario[] = [];
  sitiosValoraciones:calificacion[] = [];
  sitio:any;
  urlYB: SafeResourceUrl;
  urlYoutube:string="https://www.youtube.com/embed/N0fVdcOg94I";
  formGroupComentario:FormGroup;
  userAdmin:boolean = false;
  idResena:any;
  respuestas:Respuesta[] = [];

  constructor(private dataStorageService:DataStorageService,  
              private activatedRoute:ActivatedRoute,
              private formBuilder:FormBuilder,
              private loginService:LoginService,
              private sitioServiceService:SitioServiceService,
              private calificacionesServiceService:CalificacionesServiceService,
              private respuestasServiceService:RespuestasServiceService) {
    this.sitioId = this.activatedRoute.snapshot.params['id'];
    
    this.respuestas = this.dataStorageService.getObjectValue("respuestas");
    if(!this.respuestas){
      this.respuestas = [];
    }
    
    this.sitioServiceService.getAllSitios().subscribe(data => {
      this.sitios = data;
      this.cargarSitio();
      this.imgsSitio = this.sitio.imgs;
      console.log(this.imgsSitio);
    });
    


    this.getResenas();

  
    
    this.getValoraciones();

    this.iniciarResponder();

    
    this.userAdmin = this.loginService.isAdmin();
  }

  ngOnInit() {

  }
  

   getResenas(){
    debugger 
    this.resenas = this.dataStorageService.getObjectValue("comentarios");
    this.resenas = this.resenas.filter(x => x.idSitio == +this.sitioId);

    for(let i = 0; i < this.resenas.length; i++)
    {
      this.resenas[i].nombreSitio = this.nombreSitio(+this.resenas[i].idSitio);
    }
     
    this.resenas.forEach(res => {
         let respRes:Respuesta[] = [];
         this.respuestas.forEach(resp => {
           if(+resp.idResena == +res.id && resp.idSitio == +this.sitioId){
             respRes.push(resp);
           }
         }); 
      res.respuestas = respRes;
    }); 
   }

   getValoraciones(){
     
    this.calificacionesServiceService.getAllCalificaciones().subscribe(data => {
      this.sitiosValoraciones = data;
      this.sitiosValoraciones = this.sitiosValoraciones.filter(x => +x.idSitio == +this.sitioId);
      for(let i = 0; i < this.sitiosValoraciones.length; i++)
      {
        this.sitiosValoraciones[i].img = this.imgSitio(+this.sitiosValoraciones[i].idSitio);
      }
    });
    
   
   }

  cargarSitio(){
    this.sitios.forEach((sitio) => {
      if (sitio.id == this.sitioId) {
        this.sitio = sitio;
        console.log(this.sitio.nombre);
      }
    });
  }


  iniciarResponder = () => {
    this.formGroupComentario = this.formBuilder.group({
      Respuesta: ['', [Validators.required]]
    });
  }

  
  nombreSitio(id:number){
    let nombre:string = "Nombre no encontrado";
    this.sitios.forEach( sit => {
        if(sit.id == id){
          nombre = sit.nombre;
        }
    });

    return nombre;
  }


  imgSitio(id:any){
    let img:string = "assets/img/adventure-clouds-environment-672358.jpg";
    this.sitios.forEach( sit => {
        if(sit.id == id){
          img = sit.img;
        }
    });

    return img;
  }

 
  saveRespueta(){
    
    console.log(this.idResena); 
    let user:any = this.dataStorageService.getObjectValue("userLogin");
    let res:Respuesta = {
      idResena : this.idResena,
      idSitio : +this.sitioId,
      idUsuario : user.userL.Email,
      respuesta : this.formGroupComentario.value.Respuesta,
      key$ : ""      
    };
    this.respuestasServiceService.saveRespuetas(res);
    swal("Comentario Guardado", "Exito", "success");



  }
   

  sensurarcomentario(id:any){
   debugger
   console.log(id);
    
   this.resenas.forEach( res => {
      if(res.id == id){
        res.sensuardo = true;
        swal("Comentario sensurado", "Exito", "success");
      }
   });
   this.dataStorageService.setObjectValue("comentarios",this.resenas);




  }
  


}
