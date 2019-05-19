import { Component, OnInit } from '@angular/core';
import { SitioSeguidoServiceService }  from '../../services/sitioSeguido/sitio-seguido-service.service';
import { sitioSeguido } from '../../interfaces/sitiosSeguidos.interfaces';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private sitioSeguidoServiceService:SitioSeguidoServiceService) { }

  ngOnInit() {
//    //sitios valoraciones
   
//    let sitiosValoraciones:any [] = [];
//    let sitioValoracion:any = {id:1,
//    nombre:"Kenneth Quesada Chacón",
//    descripcion:"Buen lugar, buena administración, recomiendo visitarlo.",
//    img:"assets/img/talamanca.jpg",
//    estrellas:"5"};
//    sitiosValoraciones.push(sitioValoracion);

//    sitioValoracion = {id:2,
//    nombre:"Fransisco Corrales Castro",
//    descripcion:"Buen lugar, buena administración, recomiendo visitarlo.",
//    img:"assets/img/talamanca.jpg",
//    estrellas:"4"};
//    sitiosValoraciones.push(sitioValoracion);

//    sitioValoracion = {id:3,
//    nombre:"Kenneth Quesada Chacón",
//    descripcion:"Buen lugar, buena administración, recomiendo visitarlo.",
//    img:"assets/img/talamanca.jpg",
//    estrellas:"5"};
//    sitiosValoraciones.push(sitioValoracion);

//    sitioValoracion = {id:4,
//    nombre:"Fransisco Corrales Castro",
//    descripcion:"Buen lugar, buena administración, recomiendo visitarlo.",
//    img:"assets/img/talamanca.jpg",
//    estrellas:"4"};
//    sitiosValoraciones.push(sitioValoracion);

//    sitioValoracion = {id:3,
//    nombre:"Kenneth Quesada Chacón",
//    descripcion:"Buen lugar, buena administración, recomiendo visitarlo.",
//    img:"assets/img/talamanca.jpg",
//    estrellas:"5"};
//    sitiosValoraciones.push(sitioValoracion);

//    sitioValoracion = {id:4,
//    nombre:"Fransisco Corrales Castro",
//    descripcion:"Buen lugar, buena administración, recomiendo visitarlo.",
//    img:"assets/img/talamanca.jpg",
//    estrellas:"4"};
//    sitiosValoraciones.push(sitioValoracion);

//    this.dataStorageService.setObjectValue('sitiosValoraciones',sitiosValoraciones);

//    //fin sitios valoraciones 

   
   
  
//   let resenas:any [] = [];
//   let resena:any = {
//     nombre:"Turismo y geografía: lugares y patrimonio natural-cultural",
//     descripcion:"La reflexión teórica está presente principalmente en dos textos la presentación, a cargo del profesor Bertoncello, y en el capítulo titulado “El paisaje: la razón y la emoción”, donde Perla Zusman hace una reflexión desde el paisaje y la historia. A ellos hay que añadir el capítulo décimo –y último– elaborado por Carla Lois, Claudia Troncoso y Analía Almirón, dedicado al análisis de la producción cartográfica desarrollada por la Secretaría de Turismo de Argentina, una perspectiva original en la forma de abordar el tema del turismo desde la geografía",
//     from:"Costa Rica" 
//   };

//   resenas.push(resena);

//    resena = {
//     nombre:"Turismo y cultura",
//     descripcion:"La reflexión teórica está presente principalmente en dos textos: en la presentación, a cargo del profesor Bertoncello, y en el capítulo titulado “El paisaje: la razón y la emoción”, donde Perla Zusman hace una  reflexión desde el paisaje y la historia. A ellos hay que añadir el capítulo décimo –y último– elaborado por Carla Lois, Claudia Troncoso y Analía Almirón, dedicado al análisis de la producción cartográfica desarrollada por la Secretaría de Turismo de Argentina, una perspectiva original en la forma de abordar el tema del turismo desde la geografía",
//     from:"Costa Rica" 
//   };

//   resenas.push(resena);

//   resena = {
//     nombre:"La Argentina, un destino para los aventureros",
//     descripcion:"Desde la Cordillera hasta la costa atlántica, y desde La Quiaca hasta Ushuaia, hay miles de rincones con volcanes, montañas, sierras, cerros, valles, lagunas, arroyos, mares y ríos donde descubrir atractivos naturales inexplorados que despiertan con más o menos esfuerzo la adrenalina y la ambición de continuar. Los deportes de turismo aventura invitan a vivi",
//     from:"Argentina" 
//   };

//   resenas.push(resena);
  
//   this.dataStorageService.setObjectValue('resenas',resenas);
//   console.log(resenas); 

// let comentario:any[] = [];
// let com = {
//   id : 1,
//   idSitio : 1,
//   idUsuario : "chiko",
//   comentario : "ñubrhvpñwuirvg`pWUREHV`PSDBVÀwruivbhsidbvasyvdcAHDLVCLADHVCIPyudf",
//   sentimeinto : "Alegria",
//   key$ : ""
// };

// comentario.push(com);

// com = {
//   id : 2,
//   idSitio : 2,
//   idUsuario : "chiko",
//   comentario : "ñubrhvpñwuirvg`pWUREHV`PSDBVÀwruivbhsidbvasyvdcAHDLVCLADHVCIPyudf",
//   sentimeinto : "Alegria",
//   key$ : ""
// };

// comentario.push(com);
//    this.dataStorageService.setObjectValue('comentarios', comentario);
//   console.log(comentario);




   }
  
 }
