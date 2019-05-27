import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Observable } from 'rxjs';
import { SitioServiceService } from '../../services/sitiosServices/sitio-service.service';
import { Sitio } from '../../interfaces/sitio.interface'; 


@Component({
  selector: 'app-sitios-list',
  templateUrl: './sitios-list.component.html',
  styleUrls: ['./sitios-list.component.css']
})
export class SitiosListComponent implements OnInit {
  sitios:any[] = [];
  sitios$:Observable<any>;
  constructor(private router:Router,
              private sitioServiceService:SitioServiceService,
              private dataStorageService:DataStorageService ) {
   }

  ngOnInit() {

    this.sitios$ =  this.sitioServiceService.getAllSitios();
    this.sitios$.subscribe((UserData:Sitio[]) => {
      this.sitios = UserData;
          });
  }
  
  buscarSitio(termino:string){
    this.router.navigate(['/buscar',termino]);
  }


  nuevoSitio(){
    this.router.navigate(['/sitio-insert']);
  }

  editarSitio(sitio:any){
     this.router.navigate(['/edit-sitio',sitio.id]);
  }

  seguirSitio(sitio:any){
    if(this.dataStorageService.getObjectValue("UserNow") != ''){    
      this.router.navigate(['/sitio-seguido/' + sitio.id]);
  }else{
    swal("Error", "Debe ingresar con un usuario valido", "error");        
    this.router.navigate(['/loginIngresar/0']);
    } 
  
  }

}
