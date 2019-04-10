import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
import {Router,CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthAdminGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router, private loginService: LoginService) { }
 
  canActivate() {
    if (this.loginService.isAdmin()) {
      return true;    
    }else{
      alert("Este usuario no es un Editor"); 
      this.router.navigate(['/login/0']);
    }   
   console.log(false);
    return false;
  }
}
