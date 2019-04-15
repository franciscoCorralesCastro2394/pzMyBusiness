import { Injectable } from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  userLogin:any;
  constructor(private dataStorageService:DataStorageService,
              private router:Router) { }

  isLogged(){
  this.userLogin = this.dataStorageService.getObjectValue("userLogin");
  console.log(this.userLogin);
  if(this.userLogin.ative){
    return true;
  }else{
    return false;
  }
  }

  isAdmin(){
    this.userLogin = this.dataStorageService.getObjectValue("userLogin");
    console.log(this.userLogin);
    if(this.userLogin.userL.Admin && this.userLogin.ative){
      return true;
    }else{
      return false;
    }
    }

    isEditor(){
      this.userLogin = this.dataStorageService.getObjectValue("userLogin");
      console.log(this.userLogin);
      if(this.userLogin.userL.Editor && this.userLogin.ative){
        return true;
      }else{
        return false;
      }
      }

    Loginoff(){
      this.userLogin = this.dataStorageService.getObjectValue("userLogin");
      console.log(this.userLogin);
      if(this.userLogin.ative){
        this.userLogin.ative = false;
        this.dataStorageService.setObjectValue("userLogin",this.userLogin);
        swal("Sesión Terminada", "Gracias por visita", "info");
      }else{
        swal("Error", "No existe una sesión activa", "error");
        
      }
      
      }

  


      }
