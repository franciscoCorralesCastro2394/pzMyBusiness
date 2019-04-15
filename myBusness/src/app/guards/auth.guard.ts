import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
import {Router,CanActivate} from '@angular/router';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router, private loginService: LoginService) { }
 
  canActivate() {
    if (this.loginService.isLogged()) {
      return true;    
    }else{
      swal("Usuario no existe", "Intente de nuevo", "error");
      this.router.navigate(['/login/0']);
    }   
   console.log(false);
    return false;
  }
}


