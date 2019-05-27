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

  
  isAdmin(){
    // this.userLogin = this.dataStorageService.getObjectValue("userLogin");
    // console.log(this.userLogin);
    if(this.dataStorageService.getObjectValue("UserNow")){
      return true;
    }else{
      return false;
    }
    }

    isEditor(){
      // this.userLogin = this.dataStorageService.getObjectValue("userLogin");
      // console.log(this.userLogin);
      if(this.dataStorageService.getObjectValue("UserNow")){
        return true;
      }else{
        return false;
      }
      }
      }
