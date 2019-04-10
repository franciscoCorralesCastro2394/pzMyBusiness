import { Injectable } from '@angular/core';
import {Noticia} from '../clases/noticia';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  buscarSitio(termino:String){
     let sitiosArr:any[] = this.getObjectValue('sitios');
     let sitiosArrBusqueda:any[] = [];
     termino = termino.toLowerCase();
      console.log(sitiosArr);
        for(let i = 0; i< sitiosArr.length; i++){
          let sitio = sitiosArr[i];
          let nombre = sitio.nombre.toLowerCase();
          let desc = sitio.descripcion.toLowerCase();
          if(nombre.indexOf( termino ) >= 0 ||  desc.indexOf( termino ) >= 0  ){
            sitiosArrBusqueda.push(sitio);
          }
        }
    return sitiosArrBusqueda;
  }
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