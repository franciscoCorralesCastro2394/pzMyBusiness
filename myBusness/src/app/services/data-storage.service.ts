import { Injectable } from '@angular/core';
import { Noticia} from '../clases/noticia';
import { UsuariosService} from '../services/usuarios.service';
import { Usuario } from '../interfaces/heroes.interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  usuarios:Usuario[] = [];
  constructor(private userS:UsuariosService) { }
   
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



  setObjectValue = (key:string, objectValue:any)=>{
    if (window.localStorage) {
      console.log(objectValue);
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
          // throw new Error('No se encontró el valor ${key} en el localStorage');
          return false;
        }
      }else{
        throw new Error('No se puede obtener la información, porque no está habilitado el localStorage');
      }
    }

    

// loadUsuarios(){
//  this.usuarios  = [];
//   this.userS.getAllUaurios().subscribe(response => {
//     response.docs.forEach(value => {
//       const data = value.data();
//       const id = value.id;
//       const user:Usuario  = {
//         id: id,
//         Admin : data.Admin,
//         ConfirmPassword : data.ConfirmPassword,
//         Editor : data.Editor,
//         Email :  data.Email,
//         FirstName : data.FirstName,
//         Imagen : data.Imagen,
//         LastName : data.LastName,
//         Phone: data.Phone,
//         pass: data.pass,
//         key$ : ""
//       };
//       this.usuarios.push(user);
//     });
//   });

//   return this.usuarios;
// }
    

}