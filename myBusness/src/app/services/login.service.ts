import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  loginUser(Identificacion:string, Pass:string){
    if (window.localStorage) {
      localStorage.setItem(Pass, JSON.stringify(Identificacion)); 
    }else{
      throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
    }
  }

  isLogged(){
    return false;
  }




  
}
