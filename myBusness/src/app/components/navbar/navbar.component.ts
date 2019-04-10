import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataStorage:DataStorageService,
              private router:Router,
              private login:LoginService ) { }

  ngOnInit() {
  }


  LoginOff(){
      this.login.Loginoff();
        this.router.navigate(['/noticias-list']);
  }


   Ingresar(selector:number){
     if(selector == 0){
      this.router.navigate(['/loginIngresar/0']);
     }else{
      this.router.navigate(['/login/1']);
     }
    
   } 

}
