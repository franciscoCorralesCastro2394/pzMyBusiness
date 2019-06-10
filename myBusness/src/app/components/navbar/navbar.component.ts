import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginSeguro/login.service';
import { DataStorageService } from '../../services/data-storage.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users$:Observable<any>;
  users:Observable<any>;
  usuario_actual$:Observable<any>;
  usuario$:Observable<any>;
  
  constructor(
              private usuariosService:UsuariosService,
              private router:Router,
              private login:LoginService,
              private dataStorageService:DataStorageService) { 
                this.getUsuario();
                
  }
  ngOnInit() {
    setInterval(this.setUsuarios,1000);
   
  }

  getUsuario = () => {
    this.users$ = this.usuariosService.getAllUaurios();
    this.usuario_actual$ = this.dataStorageService.getObjectValue("UserNow");
  }

  setUsuarios = () => {
    this.usuario_actual$ = this.dataStorageService.getObjectValue("UserNow");
  }

  LoginOff(){
      this.login.logout();
      this.dataStorageService.deleteObjValue("UserNow");
      this.dataStorageService.deleteObjValue("roles");
      this.router.navigate(['lista-noticias']);
      this.getUsuario();
  }

   Ingresar(selector:number){
     if(selector == 0){
      this.router.navigate(['/loginIngresar/0']);
     }else{
      this.router.navigate(['/login/1']);
     }
   } 

   logueado(email:String){
    this.router.navigate(['/private/informacion-usuario/'+email]);
  } 

}
