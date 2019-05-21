import { Injectable } from '@angular/core';
import { Noticia} from '../clases/noticia';
import { UsuariosService} from '../services/usuarios.service';
import { Usuario } from '../interfaces/heroes.interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  usuarios:Usuario[] = [];
  constructor() { }


  setObjectValue = (key:string, objectValue:any)=>{
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(objectValue)); 
    }else{
      throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
    }
  }
getObjectValue = (key:string)=>{
      if (window.localStorage) {
        const DATA = JSON.parse(localStorage.getItem(key));
        if (DATA) {
          return DATA;
        }else{
           throw new Error('No se encontró el valor ${key} en el localStorage');
        }
      }else{
        throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
      }
    }

  deleteObjValue = (key:string) => {
    if (window.localStorage) {
      localStorage.removeItem(key);
    }else{
      throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
    }
  }  

  
}