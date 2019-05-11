import { Component, OnInit } from '@angular/core';
import {Noticia} from '../../interfaces/noticia.interface';
import {Usuario} from '../../clases/Usuario';
import {DataStorageService} from '../../services/data-storage.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NoticiaServiceService }  from '../../services/noticiasServices/noticia-service.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService,
              private noticiaServiceService:NoticiaServiceService) { }

  ngOnInit() {

  //   let noti:Noticia = {
  //   Id : 1,
  //   Descripcion : 'proyecto cultural sostenible Nauyaka',
  //   Titulo : 'Nauyaka',
  //   Imagen : 'assets/img/Cascada_azul_costa_rica_muralesyvinilos_26641659__Monthly_XL.jpg',
  //   fechaCreacion : new Date,
  //   ultimaModificacion : new Date
  // }
  // this.noticiaServiceService.saveNoticia(noti);

   
  
  // let not:Noticia = {
  //   Id : 2,
  //   Descripcion : 'proyecto cultural sostenible Talamanca',
  //   Titulo : 'Talamanca',
  //   Imagen : 'assets/img/1367498182_037809_1367498356_noticia_normal.jpg',
  //   fechaCreacion : new Date,
  //   ultimaModificacion : new Date
  // }
  // this.noticiaServiceService.saveNoticia(not);




//     let users:any [] = [];
//     let user:Usuario = new Usuario;
//     user.ConfirmPassword= "123";
//     user.Email= "chiko";
//     user.FirstName= "twtwetewrer";
//     user.LastName= "werwerwer";
//     user.Phone= 43536;
//     user.pass= "123";
//     user.Admin = true;
//     user.Editor = false;
//     user.Imagen = "/assets/img/adult-beach-beard-736716.jpg"
//     users.push(user);

//     user = new Usuario;
//     user.ConfirmPassword= "123";
//     user.Email= "Kevin";
//     user.FirstName= "Hernandez";
//     user.LastName= "Arias";
//     user.Phone= 43536;
//     user.pass= "123";
//     user.Admin = false;
//     user.Editor = true;
//     user.Imagen = "/assets/img/adult-beach-beard-736716.jpg"
//     users.push(user);

    
//    this.dataStorageService.setObjectValue('users',users);
//     console.log(users);
   
//   // sitios informacion //
  
//    let sitios:any [] = [];
//    let sitio:any = {id:1,
//    nombre:"Talamanca",
//    descripcion:"Talamanca es el cantón número 4 y el más extenso de los seis que componen la provincia de Limón, Costa Rica. Es el segundo de mayor superficie en el país, después del de San Carlos. Su área de 2.809,93 km² es incluso superior que la provincia de Heredia",
//    img:"assets/img/talamanca.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

   
//    sitio = {id:2,
//    nombre:"Turrialbaa",
//    descripcion:"Turrialba es la ciudad cabecera del cantón y distrito del mismo nombre, en la provincia de Cartago, Costa Rica. Se encuentra ubicada en el valle que conforma el río Turrialba, uno de los mayores afluentes del río Reventazón, a una altitud de 646 m y a unos 44 km al este de la ciudad de Cartago y a 67 km de San José, capital de la República. Debido a su asentamiento en una llanura aluvial con materiales sedimentarios poco consolidados, el distrito en general ha sido afectado por inundaciones históricas de sus ríos, en particular causadas por el Turrialba, el Aquiares y el Azul.",
//    img:"/assets/img/turrialba.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

//    sitio = {id:3,
//    nombre:"Bocas del toro",
//    descripcion:"Bocas del Toro es una provincia de Panamá que abarca una cadena de islas frente a la costa del Caribe, junto con una sección de territorio continental cercano con un bosque tropical biodiverso. En Isla Colón, la isla principal, se encuentra la capital, Pueblo de Bocas, un núcleo central con restaurantes, tiendas y vida nocturna. Las playas populares incluyen Boca del Drago. También en Isla Colón está la playa Estrella, llamada así por las numerosas estrellas de mar de su lecho oceánico.",
//    img:"/assets/img/turrialba.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

//    sitio = {id:4,
//    nombre:"Volcán Arenal",
//    descripcion:"El volcán Arenal de Costa Rica está situado en el distrito de La Fortuna, cantón de San Carlos, en la provincia de Alajuela. Tiene una altura de 1.670 msnm. El volcán se encuentra dentro de el Parque nacional Volcán Arenal. Inició su último y actual período de actividad en el año 1968, el día 29 de julio a las 7:30.",
//    img:"/assets/img/turrialba.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

//    sitio = {id:5,
//    nombre:"Nicaragua",
//    descripcion:"Nicaragua es un país de América Central ubicado entre el océano Pacífico y el mar Caribe, conocido por su espectacular territorio con lagos, volcanes y playas. El extenso lago Managua y el icónico estratovolcán Momotombo se ubican al norte de la capital, Managua",
//    img:"/assets/img/Nicaragua.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

//    sitio = {id:6,
//    nombre:"Volcán Irazú",
//    descripcion:"El volcán Irazú es un estratovolcán activo ubicado en Costa Rica, en la Cordillera Volcánica Central, en el interior del parque nacional que lleva su nombre, a unos 32 km al norte de la ciudad de Cartago. Su cima, a una altitud de 3.432 msnm, se encuentra ubicada en el distrito de Santa Rosa, en el Cantón de Oreamuno, Provincia de Cartago. La cumbre del volcán tiene varios cráteres, uno de los cuales contiene un lago verde de profundidad variable. Es el volcán activo más alto de Costa Rica. Es fácil visitarlo desde San José, a través de un camino directo hasta los cráteres de la cumbre y un servicio diario de autobús a la cumbre. Es un punto turístico muy popular.",
//    img:"/assets/img/turrialba.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

//    sitio = {id:7,
//    nombre:"Puntarenas",
//    descripcion:"Puntarenas es provincia número 6 de Costa Rica, ubicada en su zona occidental y abarcando la mayor parte de la costa Pacífica del país. Limita con las provincias de Guanacaste, Alajuela, San José, Limón y con Panamá. Posee una superficie de 11.266 km², lo que la convierte en la provincia más extensa de Costa Rica.",
//    img:"/assets/img/turrialba.jpg",
//    imgs:["assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg","assets/img/talamanca.jpg"],
//    horario:"8:00 am a 9:00pm Martes - Domingo",
//    videoYB:"https://www.youtube.com/embed/N0fVdcOg94I"};
//    sitios.push(sitio);

//    sitios.push(sitio);
  
   
//   this.dataStorageService.setObjectValue('sitios',sitios);
//   console.log(sitios);
//    // sitios informacion  fin//

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

  
//   let sitiosSeguidos:any[] = [];
//   let sitioSeguido = {
//     id:1,
//     idSitio:1,
//     idUsuario: "chiko",
//     key$:""  
//   };

//   sitiosSeguidos.push(sitioSeguido);

//   sitioSeguido = {
//     id:2,
//     idSitio:2,
//     idUsuario: "chiko",
//     key$:""  
//   };
//   sitiosSeguidos.push(sitioSeguido);
 

//    this.dataStorageService.setObjectValue('sitiosSeguidos', sitiosSeguidos);
//    console.log(sitiosSeguidos); 

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


// let calificaciones:any[] = [];
// let cal = {
//     id:1,
//     idSitio:1,
//     idUsuario:"chiko",
//     key$:""
//     };
    
//     calificaciones.push(cal);

//     cal = {
//       id:2,
//       idSitio:2,
//       idUsuario:"chiko",
//       key$:""
//       };

//       calificaciones.push(cal);

// this.dataStorageService.setObjectValue('calificaciones', calificaciones);






  }
  
}
