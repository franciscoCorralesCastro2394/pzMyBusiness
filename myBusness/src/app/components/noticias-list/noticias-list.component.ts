import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {
  private noticias:any[];  
  constructor(private dataStorage:DataStorageService,
              private router:Router) {

     this.getNoticias();
   
  }
   
   editarNoticia(noti:any){
     console.log(noti);
     this.router.navigate(['/noticias-edit',noti.Id]);
   }

  ngOnInit() {
  
  }


  getNoticias = () => {
    this.noticias = this.dataStorage.getObjectValue('noticias');
    console.log(this.noticias);
    console.log("pruebas");

  }

  


}
