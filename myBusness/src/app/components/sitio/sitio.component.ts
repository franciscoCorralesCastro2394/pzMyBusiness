import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.css']
})
export class SitioComponent implements OnInit {
  sitioId:string;
  sitios:any[] = []; 
  imgsSitio:any[] = [];
  resenas:any[] = [];
  sitiosValoraciones:any[] = [];
  sitio:any;
  urlYB: SafeResourceUrl;
  urlYoutube:string="https://www.youtube.com/embed/N0fVdcOg94I";
  constructor(private dataStorageService:DataStorageService,  
              private activatedRoute:ActivatedRoute) {
  	this.sitioId = this.activatedRoute.snapshot.params['id'];
  	this.sitios = this.dataStorageService.getObjectValue("sitios");
  	this.cargarSitio();
  	this.resenas = this.dataStorageService.getObjectValue("resenas");
  	this.imgsSitio = this.sitio.imgs;
  	console.log(this.imgsSitio);
  	this.sitiosValoraciones = this.dataStorageService.getObjectValue("sitiosValoraciones");
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

}
