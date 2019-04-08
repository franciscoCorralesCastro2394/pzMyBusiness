import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  userId:string;
  users:any[] = [];
  sitios:any[] = [];
  resenas:any[] = [];
  userLogin:any;
  nombre:string;
  img:string;
  constructor(private activatedRoute:ActivatedRoute,
              private dataStorageService:DataStorageService) {
    this.userId = this.activatedRoute.snapshot.params['user'];

    this.users = this.dataStorageService.getObjectValue("users");
 
    this.cargarUsuario();

    this.sitios = this.dataStorageService.getObjectValue("sitios");
    console.log(this.sitios);

    this.resenas = this.dataStorageService.getObjectValue("resenas");

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

}
