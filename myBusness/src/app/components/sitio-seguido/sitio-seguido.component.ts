import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sitio-seguido',
  templateUrl: './sitio-seguido.component.html',
  styleUrls: ['./sitio-seguido.component.css']
})
export class SitioSeguidoComponent implements OnInit {
  sitios:any[] = [];
  sitioId:number = 0;
  sitio:any; 

  constructor(private dataStorageService:DataStorageService, 
              private router:Router,
              private activatedRoute:ActivatedRoute) { 

    this.sitioId = this.activatedRoute.snapshot.params['id'];
    this.sitios = this.dataStorageService.getObjectValue("sitios");
    console.log(this.sitios);
    this.sitios.forEach((sit) => {
      if(this.sitioId === sit.id){
        this.sitio = sit;
      }
    });
  }

  ngOnInit() {
  }

  Calificar(){

   }


   calificacion(cal:number){
     console.log(cal);
   }

  

}
