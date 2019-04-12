import { Injectable } from '@angular/core';
import { Usuario  } from '../interfaces/heroes.interfaces';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 
   usurioURL:string = "https://pzmybusiness.firebaseio.com/usuarios"; 
  
  constructor( private _http:Http) {

   }

   nuevoUsuario( usuario:Usuario){
     let body = JSON.stringify(usuario);
     let headers = new Headers({
      'Content-Type':'application/json'
      });

   }
}
