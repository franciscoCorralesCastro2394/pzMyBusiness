import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import swal from 'sweetalert';
import { AuthService } from '../../services/serviceAuth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataStorage:DataStorageService,
              private router:Router,
              private login:LoginService,
              private auth:AuthService ) { }

  ngOnInit() {
  }


  LoginOff(){
      this.auth.logout();
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
