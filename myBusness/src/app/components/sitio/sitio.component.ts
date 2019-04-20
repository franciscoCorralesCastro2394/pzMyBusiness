import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { comentario } from '../../interfaces/comentario.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { calificacion } from '../../interfaces/calificacion.interfaces';



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

  constructor(private dataStorageService:DataStorageService,  
              private activatedRoute:ActivatedRoute,
              private formBuilder:FormBuilder,
              ) {
  	this.sitioId = this.activatedRoute.snapshot.params['id'];
    
    this.sitios = this.dataStorageService.getObjectValue("sitios");
  	this.cargarSitio();
    debugger
    this.resenas = this.dataStorageService.getObjectValue("comentarios");
    this.resenas = this.resenas.filter(x => x.idSitio == +this.sitioId);

    for(let i = 0; i < this.resenas.length; i++)
    {
      this.resenas[i].nombreSitio = this.nombreSitio(+this.resenas[i].idSitio);
    }


    

  	this.imgsSitio = this.sitio.imgs;
    console.log(this.imgsSitio);
    
    debugger
    this.sitiosValoraciones = this.dataStorageService.getObjectValue("calificaciones");
    this.sitiosValoraciones = this.sitiosValoraciones.filter(x => +x.idSitio == +this.sitioId);
    for(let i = 0; i < this.sitiosValoraciones.length; i++)
    {
      this.sitiosValoraciones[i].img = this.imgSitio(+this.sitiosValoraciones[i].idSitio);
    }
    
    this.iniciarResponder();
  }

  ngOnInit() {

  }
  cargarSitio(){
    this.sitios = this.dataStorageService.getObjectValue("sitios");
    this.sitios.forEach((sitio) => {
      //console.log(sitio.id);
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

}
