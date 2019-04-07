import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
import {Router,CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router, private loginService: LoginService) { }
 
  canActivate() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
      alert("No estás logueado");
      return false;
    }  
    return true;
  }
}


