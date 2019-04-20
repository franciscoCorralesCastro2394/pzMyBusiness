import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { sitioSeguido } from '../../interfaces/sitiosSeguidos.interfaces';
import { exists } from 'fs';
import { comentario } from '../../interfaces/comentario.interface';
import { calificacion } from '../../interfaces/calificacion.interfaces';

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


  constructor(private activatedRoute:ActivatedRoute,
              private dataStorageService:DataStorageService) {
    this.userId = this.activatedRoute.snapshot.params['user'];
    
    this.users = this.dataStorageService.getObjectValue("users");
 
    this.cargarUsuario();

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
     
   
    this.resenas = this.dataStorageService.getObjectValue("comentarios");
    this.resenas = this.resenas.filter(x => x.idUsuario == this.userId);
    
    for(let i=0; i < this.resenas.length; i++){
      this.resenas[i].nombreSitio = this.nombreSitio(this.resenas[i].idSitio);
    }

    
    this.calificaciones = this.dataStorageService.getObjectValue("calificaciones");
    this.calificaciones.filter(x => x.idUsuario == this.userId);
    for(let i=0; i < this.calificaciones.length; i++){
      this.calificaciones[i].img = this.imgSitio(this.calificaciones[i].idSitio);
      this.calificaciones[i].nombreSitio = this.nombreSitio(this.calificaciones[i].idSitio);
    }
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
