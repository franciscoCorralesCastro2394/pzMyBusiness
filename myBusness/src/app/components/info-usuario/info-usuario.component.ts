import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { sitioSeguido } from '../../interfaces/sitiosSeguidos.interfaces';
import { comentario } from '../../interfaces/comentario.interface';
import { calificacion } from '../../interfaces/calificacion.interfaces';
import { Respuesta } from '../../interfaces/respuesta.interface';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  userId:string;
  users:any[] = [];
  sitios:any[] = [];
  sitiosS:any[] = [];
  resenas:comentario[] = [];
  sitiosUsuario:[] = [];
  calificaciones:calificacion[] = []; 
  sitiosSeguidos:sitioSeguido[] = [];
  userLogin:any;
  nombre:string;
  img:string;
  respuestas:Respuesta[] = [];



  constructor(private activatedRoute:ActivatedRoute,
              private dataStorageService:DataStorageService) {

                debugger
    this.userId = this.activatedRoute.snapshot.params['user'];
    
    this.users = this.dataStorageService.getObjectValue("users");

    this.respuestas = this.dataStorageService.getObjectValue("respuestas");
    if(!this.respuestas){
      this.respuestas = [];
    }
 
    this.cargarUsuario();

    this.getSitios(); 
   
    this.getResenas();

    this.getCalificacones();
    
 
    console.log(this.calificaciones);




   }
  ngOnInit() {
  }

  cargarUsuario(){
    this.users = this.dataStorageService.getObjectValue("users");
    this.users.forEach((user) => {
      if (user.Email === this.userId) {
        this.userLogin = user;
        this.nombre = this.userLogin.FirstName + '  ' + this.userLogin.LastName;
        this.img = this.userLogin.Imagen;
        console.log(this.userLogin);
      }
    });
  }

  getResenas(){
    
    this.resenas = this.dataStorageService.getObjectValue("comentarios");
    this.resenas = this.resenas.filter(x => x.idUsuario == this.userId);
    
    for(let i=0; i < this.resenas.length; i++){
      this.resenas[i].nombreSitio = this.nombreSitio(this.resenas[i].idSitio);
    }

    this.resenas.forEach(res => {
      let respRes:Respuesta[] = [];
      this.respuestas.forEach(resp => {
        if(+resp.idResena == +res.id){
          respRes.push(resp);
        }
      }); 
   res.respuestas = respRes;
 }); 
  }

  getCalificacones(){
    this.calificaciones = this.dataStorageService.getObjectValue("calificaciones");
    this.calificaciones.filter(x => x.idUsuario == this.userId);
    for(let i=0; i < this.calificaciones.length; i++){
      this.calificaciones[i].img = this.imgSitio(this.calificaciones[i].idSitio);
      this.calificaciones[i].nombreSitio = this.nombreSitio(this.calificaciones[i].idSitio);
    }
  }

  getSitios(){
  
    this.sitios = this.dataStorageService.getObjectValue("sitios");
    this.sitiosSeguidos = this.dataStorageService.getObjectValue("sitiosSeguidos");
    console.log(this.sitiosSeguidos);

  
    this.sitiosSeguidos = this.sitiosSeguidos.filter(x => x.idUsuario == this.userId);
    this.sitiosSeguidos.forEach(sitS => {
      this.sitios.forEach(sit => {
        if(sit.id == sitS.idSitio){
           this.sitiosS.push(sit);
        }
      }); 
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
}
