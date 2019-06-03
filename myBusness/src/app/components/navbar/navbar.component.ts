import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginSeguro/login.service';
import { DataStorageService } from '../../services/data-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
              private router:Router,
              private login:LoginService,
              private dataStorageService:DataStorageService) { }
  ngOnInit() {
  }

  LoginOff(){
      this.login.logout();
      this.dataStorageService.deleteObjValue("UserNow");
      this.dataStorageService.deleteObjValue("roles");
      this.router.navigate(['lista-noticias']);
  }

   Ingresar(selector:number){
     if(selector == 0){
      this.router.navigate(['/loginIngresar/0']);
     }else{
      this.router.navigate(['/login/1']);
     }
   } 
}
