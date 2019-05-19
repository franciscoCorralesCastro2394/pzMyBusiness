import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { sitioSeguido } from '../../interfaces/sitiosSeguidos.interfaces'
import swal from 'sweetalert';
import { calificacion } from '../../interfaces/calificacion.interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SitioSeguidoServiceService } from '../../services/sitioSeguido/sitio-seguido-service.service';
import { SitioServiceService } from '../../services/sitiosServices/sitio-service.service';



@Component({
  selector: 'app-sitio-seguido',
  templateUrl: './sitio-seguido.component.html',
  styleUrls: ['./sitio-seguido.component.css']
})
export class SitioSeguidoComponent implements OnInit {
  sitios:any[] = [];
  sitioId:number = 0;
  sitio:any; 
  sitiosSeguidos:any[] = []; 
  calificaciones:any[] = []; 
  comentarios:any[] = [];
  sitioSeguido:sitioSeguido;
  calificacionSitioSeguido:calificacion;
  userLoginNow:any; 
  comentario:any;
  btnSelected:string = "";
  calificacionSitio:number = 0; 
  formGroupComentario:FormGroup;
  botonesCal:object = {
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false
  };

  constructor(private dataStorageService:DataStorageService, 
              private router:Router,
              private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private sitioSeguidoServiceService:SitioSeguidoServiceService,
              private sitioServiceService:SitioServiceService) { 

    this.sitioId = this.activatedRoute.snapshot.params['id'];

  

    this.userLoginNow = this.dataStorageService.getObjectValue("userLogin");
    console.log(this.userLoginNow);


this.sitioSeguidoServiceService.getAllSitiosSeguidos().subscribe(data => {
  debugger
    this.sitiosSeguidos = data;
      this.sitioSeguido = {
        id : this.sitiosSeguidos.length + 1,
        idSitio : +this.sitioId,
        idUsuario : this.userLoginNow.userL.Email,  
        key$ : ""
      }; 
    this.sitioSeguidoServiceService.saveSitiosSeguisdos(this.sitioSeguido);
});
   


this.sitioServiceService.getAllSitios().subscribe(data => {
 this.sitios = data;
    this.sitios.forEach((sit) => {
      if(this.sitioId == sit.id){
        this.sitio = sit;
      }
    });
    console.log(this.sitio);
});

}

  ngOnInit() {
    this.iniciarComentario();
  }

  calificar(btn:number){   
      console.log(btn);
            if(btn == 1){
                  this.botonesCal = {
                    btn1: true,
                    btn2: false,
                    btn3: false,
                    btn4: false,
                    btn5: false
                  };
                  this.calificacionSitio = 1;
                }

            if(btn == 2){
                  this.botonesCal = {
                  btn1: false,
                  btn2: true,
                  btn3: false,
                  btn4: false,
                  btn5: false
                };
                this.calificacionSitio = 2;
              }

            if(btn == 3){
                this.botonesCal = {
                btn1: false,
                btn2: false,
                btn3: true,
                btn4: false,
                btn5: false
              };
              this.calificacionSitio = 3;
            }

            if(btn == 4){
              this.botonesCal = {
              btn1: false,
              btn2: false,
              btn3: false,
              btn4: true,
              btn5: false
            };
            this.calificacionSitio = 4;
            }

            if(btn == 5){
              this.botonesCal = {
              btn1: false,
              btn2: false,
              btn3: false,
              btn4: false,
              btn5: true
            };
            this.calificacionSitio = 5;
            } 
}


iniciarComentario = () => {
  this.formGroupComentario = this.formBuilder.group({
    Sentimiento: ['', [Validators.required]],
    Comentario: ['', [Validators.required]]
  });
}

calificacion(){
     debugger
     if(this.calificacionSitio == 0){
        swal("No se ha hecho la evaluación", "Intente de nuevo", "error");
     }else{
          this.calificaciones = this.dataStorageService.getObjectValue("calificaciones");
          this.calificacionSitioSeguido = {
          id : this.calificaciones.length + 1,
          idUsuario :this.userLoginNow.userL.Email, 
          idSitio : this.sitioId,
          key$ : "",
          numCalificacion : this.calificacionSitio 
          };
          this.calificaciones.push(this.calificacionSitioSeguido);
          this.dataStorageService.setObjectValue("calificaciones",this.calificaciones);
          swal("Sitio calificado con exito", "Exito", "info");
     }
}

agregarComentario(){
  this.comentarios = this.dataStorageService.getObjectValue("comentarios");
  this.comentario = {
  id : this.comentarios.length + 1,
  idSitio : this.sitioId,
  idUsuario : this.userLoginNow.userL.Email,
  comentario : this.formGroupComentario.value.Comentario,
  sentimeinto : this.formGroupComentario.value.Sentimiento,
  key$ : ""
  };
  this.comentarios.push(this.comentario);
  this.dataStorageService.setObjectValue("comentarios",this.comentarios);
  swal("Sitio calificado con exito", "Exito", "info");
}
}
