import { Injectable } from '@angular/core';
import {Noticia} from '../clases/noticia';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  setObjectValue= (key:string, objectValue:any)=>{
    if (window.localStorage) {
      console.log(objectValue);
      localStorage.setItem(key, JSON.stringify(objectValue)); 
    }else{
      throw new Error('No se puede almacenar la información, porque no está habilitado el localStorage');
    }
  }
    getObjectValue= (key:string)=>{
      if (window.localStorage) {
        const DATA= JSON.parse(localStorage.getItem(key));
        if (DATA) {
          return DATA;
        }else{
          throw new Error('No se encontró el valor ${key} en el localStorage');
        }
      }else{
        throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
      }
    }

}