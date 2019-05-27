import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import {Router,CanActivate} from '@angular/router';
import swal from 'sweetalert';
import {DataStorageService} from '../services/data-storage.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router,
              private dataStorageService:DataStorageService
    ) { }
 
  canActivate() {
    if (this.dataStorageService.getObjectValue("UserNow")) {
      return true;    
    }else{
      swal("Usuario no existe", "Intente de nuevo", "error");
      this.router.navigate(['/login/0']);
    }   
   console.log(false);
    return false;
  }
}


