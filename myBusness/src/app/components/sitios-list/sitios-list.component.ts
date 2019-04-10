import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sitios-list',
  templateUrl: './sitios-list.component.html',
  styleUrls: ['./sitios-list.component.css']
})
export class SitiosListComponent implements OnInit {
  sitios:any[] = [];
  constructor(private dataStorageService:DataStorageService, private router:Router) {
  	this.sitios = this.dataStorageService.getObjectValue("sitios");
    
    //console.log(this.sitios);
   }

  ngOnInit() {
  }
  
  buscarSitio(termino:string){
    console.log(termino); 
    this.router.navigate(['/buscar',termino]);
  }


  editarSitio(sitio:any){
     console.log(sitio);
     this.router.navigate(['/edit-sitio',sitio.id]);
  }

}
