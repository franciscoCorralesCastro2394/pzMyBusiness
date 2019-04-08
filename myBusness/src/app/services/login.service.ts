import { Injectable } from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogin:any;
  constructor(private dataStorageService:DataStorageService,
              private router:Router,) { }

  isLogged(){
  this.userLogin = this.dataStorageService.getObjectValue("userLogin");
  console.log(this.userLogin);
  if(this.userLogin.ative){
    return true;
  }else{
    return false;
  }
  }




  
}
