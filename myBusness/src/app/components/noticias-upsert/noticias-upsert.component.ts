import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DataStorageService} from '../../services/data-storage.service';
import {Noticia} from '../../clases/noticia';
import {Usuario} from '../../clases/Usuario';

@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  noticiaId:number = 0;
  formGroup: FormGroup;
  IdNot: number = 0; 

  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private dataStorageService:DataStorageService) { 

    this.noticiaId = this.activatedRoute.snapshot.params['id'];
    console.log(this.noticiaId);

    let listaNoticias:any[] = this.dataStorageService.getObjectValue("noticias");
    this.IdNot = listaNoticias.length + 1;
   if(this.noticiaId){
     this.cargarNoticia(this.noticiaId);
    }else{
      this.iniciarNoticia();
    }
  }

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

    //this.dataStorageService.setObjectValue('noticias',noticias);


    let users:any [] = [];
    let user:Usuario = new Usuario;

    user.ConfirmPassword= "123";
    user.Email= "chiko";
    user.FirstName= "twtwetewrer";
    user.LastName= "werwerwer";
    user.Phone= 43536;
    user.pass= "123";
    users.push(user);
   // this.dataStorageService.setObjectValue('users',users);
    

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
  }



  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      Id: [this.IdNot, [Validators.required],],
      Titulo: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],
      Descripcion: ['', [Validators.required, Validators.minLength(15)]],
      FechaCreacion: [new Date()],
      UltimaModificacion: [new Date()],
    });
  }

  cargarNoticia = (id: number) => {
    console.log(id);
    const listaNoticias = this.dataStorageService.getObjectValue("noticias");
    console.log(listaNoticias);
    listaNoticias.forEach(noticia => {
      if (noticia.Id == id) {
        this.formGroup = this.formBuilder.group({
          Id: [id, [Validators.required],],
          Titulo: [noticia.Titulo, [Validators.required]],
          Imagen: [noticia.Imagen, [Validators.required]],
          Descripcion: [noticia.Descripcion, [Validators.required, Validators.minLength(15)]],
          FechaCreacion: [noticia.FechaCreacion],
          UltimaModificacion: [noticia.UltimaModificacion],
        });
      }
    });
  } 



  guardarData = () => {

    console.log(this.formGroup);
    if (this.formGroup.valid) {
      let noticiaIndex = -1;
      const listaNoticias = this.dataStorageService.getObjectValue("noticias");
      listaNoticias.forEach((noticia, index) => {
        if (noticia.Id == this.formGroup.value.Id) {
          noticiaIndex = index;
        }
      });

      if (noticiaIndex >= 0) {
        listaNoticias[noticiaIndex] = this.formGroup.value;
      } else {
        listaNoticias.push(this.formGroup.value);
      }
      this.formGroup.patchValue({ "UltimaModificacion": new Date() });

      this.dataStorageService.setObjectValue("noticias", listaNoticias);

      alert("Información guardada");
    } else {
      alert("Debe completar la información correctamente");
    }
  }


}
