import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sitios-list',
  templateUrl: './sitios-list.component.html',
  styleUrls: ['./sitios-list.component.css']
})
export class SitiosListComponent implements OnInit {
  sitios:any[] = [];
  constructor(private dataStorageService:DataStorageService, 
              private router:Router,
              private loginService:LoginService) {
  	this.sitios = this.dataStorageService.getObjectValue("sitios");
    
    //console.log(this.sitios);
   }

  ngOnInit() {
  }
  
  buscarSitio(termino:string){
    console.log(termino); 
    this.router.navigate(['/buscar',termino]);
  }


  nuevoSitio(){
    this.router.navigate(['/sitio-insert']);
  }

  editarSitio(sitio:any){
     console.log(sitio);
     this.router.navigate(['/edit-sitio',sitio.id]);
  }

  seguirSitio(sitio:any){

    if(this.loginService.isLogged()){
    swal("Sitio Seguido", "Puedes hacer tus valoraciones", "success");        
    console.log(sitio);      
      this.router.navigate(['/sitio-seguido/' + sitio.id]);
  }else{
    swal("Error", "Debe ingresar con un usuario valido", "error");        
    this.router.navigate(['/loginIngresar/0']);
    } 
  
  }

}
