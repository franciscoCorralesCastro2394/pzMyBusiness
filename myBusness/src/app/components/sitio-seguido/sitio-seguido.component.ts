import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { sitioSeguido } from '../../interfaces/sitiosSeguidos.interfaces'
import swal from 'sweetalert';
import { calificacion } from '../../interfaces/calificacion.interfaces';
import { Usuario } from '../../interfaces/heroes.interfaces';
import { comentario } from '../../interfaces/comentario.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SitioSeguidoServiceService } from '../../services/sitioSeguido/sitio-seguido-service.service';
import { SitioServiceService } from '../../services/sitiosServices/sitio-service.service';
import { CalificacionesServiceService } from '../../services/calificacionesService/calificaciones-service.service';
import { ComentariosService } from '../../services/comentariosServices/comentarios.service';
import { LoginService } from '../../services/loginSeguro/login.service';


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
  comentarios:comentario[] = [];
  sitioSeguido:sitioSeguido;
  calificacionSitioSeguido:calificacion;
  userLoginNow:Usuario; 
  comentario:comentario;
  btnSelected:string = "";
  calificacionSitio:number = 0; 
  formGroupComentario:FormGroup;
  calId:number;
  comId:number;
  userNow:string;
  botonesCal:object = {
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false
  };

  constructor(private dataStorageService:DataStorageService, 
              private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private sitioSeguidoServiceService:SitioSeguidoServiceService,
              private sitioServiceService:SitioServiceService,
              private calificacionesServiceService:CalificacionesServiceService,
              private comentariosService:ComentariosService,
              private loginService:LoginService) { 

    this.sitioId = this.activatedRoute.snapshot.params['id'];
  
    this.calificacionesServiceService.getAllCalificaciones().subscribe(data  => {
     let lista:any[];
     lista = data;
     this.calId = +lista.length + 1; 
    });

    this.comentariosService.getAllComentarios().subscribe(data  => {
      let lista:any[];
      lista = data;
      this.comId = +lista.length + 1; 
     });
  
    this.userNow = this.dataStorageService.getObjectValue("UserNow");
 




this.sitioSeguidoServiceService.getAllSitiosSeguidos().subscribe(data => {
    this.sitiosSeguidos = data;
});



this.sitioServiceService.getAllSitios().subscribe(data => {
 this.sitios = data;
    this.sitios.forEach((sit) => {
      if(this.sitioId == sit.id){
        this.sitio = sit;
      }
    });
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
     
     if(this.calificacionSitio == 0){
        swal("No se ha hecho la evaluación", "Intente de nuevo", "error");
     }else{
        
          this.calificacionSitioSeguido = {
          id : this.calId,
          idUsuario :this.userNow, 
          idSitio : this.sitioId,
          key$ : "",
          numCalificacion : this.calificacionSitio 
          };
          this.calificacionesServiceService.saveCalificaciones(this.calificacionSitioSeguido);
          swal("Sitio calificado con exito", "Exito", "info");
     }
}

agregarComentario(){
  debugger
  this.comentario = {
  id : this.comId,
  idSitio : this.sitioId,
  idUsuario : this.userNow,
  comentario : this.formGroupComentario.value.Comentario,
  sentimeinto : this.formGroupComentario.value.Sentimiento,
  key$ : "",
  nombreSitio:"" ,
  respuestas: {},
  sensuardo:false
  };
this.comentariosService.saveComentario(this.comentario);

  swal("Se creo comentario", "Exito", "info");
}



seguirSitio(){
  debugger
  this.sitioSeguido = {
    id : this.sitiosSeguidos.length + 1,
    idSitio : +this.sitioId,
    idUsuario :  this.userNow,  
    key$ : ""
  }; 
this.sitioServiceService.saveSitiosSeguisdos(this.sitioSeguido);
swal("Sitio seguido", "Exito", "success");

}
}
