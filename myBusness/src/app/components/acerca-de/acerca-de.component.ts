import { Component, OnInit } from '@angular/core';
import {Noticia} from '../../clases/noticia';
import {Usuario} from '../../clases/Usuario';
import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {

    let noticias:any [] = [];
    let noti:Noticia = new Noticia;
    noti.Id = 1;
    noti.Descripcion = 'proyecto cultural sostenible Nauyaka';
    noti.Titulo = 'Nauyaka';
    noti.Imagen = 'assets/img/Cascada_azul_costa_rica_muralesyvinilos_26641659__Monthly_XL.jpg';
    noti.fechaCreacion = new Date(Date.now());
    noti.ultimaModificacion = new Date(Date.now());
    
    noticias.push(noti);

    noti = new Noticia;
    noti = new Noticia;
    noti.Id = 2;
    noti.Descripcion = 'proyecto cultural sostenible Talamanca';
    noti.Titulo = 'Talamanca';
    noti.Imagen = 'assets/img/1367498182_037809_1367498356_noticia_normal.jpg';
    noti.fechaCreacion = new Date(Date.now());
    noti.ultimaModificacion = new Date(Date.now())
    noticias.push(noti);

    this.dataStorageService.setObjectValue('noticias',noticias);


    let users:any [] = [];
    let user:Usuario = new Usuario;

    user.ConfirmPassword= "123";
    user.Email= "chiko";
    user.FirstName= "twtwetewrer";
    user.LastName= "werwerwer";
    user.Phone= 43536;
    user.pass= "123";
    user.Admin = true;
    user.Imagen = "/assets/img/adult-beach-beard-736716.jpg"
    users.push(user);
   this.dataStorageService.setObjectValue('users',users);
   console.log(users);
    

   let sitios:any [] = [];
   let sitio:any = {nombre:"Talamanca",
   descripcion:"Talamanca es el cantón número 4 y el más extenso de los seis que componen la provincia de Limón, Costa Rica. Es el segundo de mayor superficie en el país, después del de San Carlos. Su área de 2.809,93 km² es incluso superior que la provincia de Heredia",
   img:"assets/img/talamanca.jpg"};
   sitios.push(sitio);


   sitio = {nombre:"Turrialbaa",
   descripcion:"Turrialba es la ciudad cabecera del cantón y distrito del mismo nombre, en la provincia de Cartago, Costa Rica",
   img:"/assets/img/turrialba.jpg"};
   sitios.push(sitio);

   sitio = {nombre:"Nicaragua",
   descripcion:"Nicaragua es un país de América Central ubicado entre el océano Pacífico y el mar Caribe, conocido por su espectacular territorio con lagos, volcanes y playas. El extenso lago Managua y el icónico estratovolcán Momotombo se ubican al norte de la capital, Managua",
   img:"/assets/img/Nicaragua.jpg"};
   sitios.push(sitio);

   
  this.dataStorageService.setObjectValue('sitios',sitios);
  console.log(sitios);

  let resenas:any [] = [];
  let resena:any = {
    nombre:"Turismo y geografía: lugares y patrimonio natural-cultural",
    descripcion:"La reflexión teórica está presente principalmente en dos textos la presentación, a cargo del profesor Bertoncello, y en el capítulo titulado “El paisaje: la razón y la emoción”, donde Perla Zusman hace una reflexión desde el paisaje y la historia. A ellos hay que añadir el capítulo décimo –y último– elaborado por Carla Lois, Claudia Troncoso y Analía Almirón, dedicado al análisis de la producción cartográfica desarrollada por la Secretaría de Turismo de Argentina, una perspectiva original en la forma de abordar el tema del turismo desde la geografía",
    from:"Costa Rica" 
  };

  resenas.push(resena);

   resena = {
    nombre:"Turismo y cultura",
    descripcion:"La reflexión teórica está presente principalmente en dos textos: en la presentación, a cargo del profesor Bertoncello, y en el capítulo titulado “El paisaje: la razón y la emoción”, donde Perla Zusman hace una  reflexión desde el paisaje y la historia. A ellos hay que añadir el capítulo décimo –y último– elaborado por Carla Lois, Claudia Troncoso y Analía Almirón, dedicado al análisis de la producción cartográfica desarrollada por la Secretaría de Turismo de Argentina, una perspectiva original en la forma de abordar el tema del turismo desde la geografía",
    from:"Costa Rica" 
  };

  resenas.push(resena);

  resena = {
    nombre:"La Argentina, un destino para los aventureros",
    descripcion:"Desde la Cordillera hasta la costa atlántica, y desde La Quiaca hasta Ushuaia, hay miles de rincones con volcanes, montañas, sierras, cerros, valles, lagunas, arroyos, mares y ríos donde descubrir atractivos naturales inexplorados que despiertan con más o menos esfuerzo la adrenalina y la ambición de continuar. Los deportes de turismo aventura invitan a vivi",
    from:"Argentina" 
  };

  resenas.push(resena);

  this.dataStorageService.setObjectValue('resenas',resenas);
  console.log(resenas);
  }

}
