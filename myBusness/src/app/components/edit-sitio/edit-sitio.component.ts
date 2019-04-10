import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-sitio',
  templateUrl: './edit-sitio.component.html',
  styleUrls: ['./edit-sitio.component.css']
})
export class EditSitioComponent implements OnInit {
  sitioId:number;
  formGroupSitioEdit:FormGroup;
  IdSitio:number;


  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private dataStorageService:DataStorageService) {
    this.iniciarNoticia();
    this.sitioId = this.activatedRoute.snapshot.params['id'];
    console.log(this.sitioId);

    if(this.sitioId){
      this.cargarNoticia(this.sitioId);   
    }
   }
   



  ngOnInit() {
  }

  iniciarNoticia = () => {
    this.formGroupSitioEdit = this.formBuilder.group({
      id: [this.IdSitio, [Validators.required],],
      nombre: ['', [Validators.required]],
      img: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      horario: ['',Validators.required],
      videoYB: ['',Validators.required],
    });
  }

  cargarNoticia = (id: number) => {
    console.log(id);
    const listaSitios = this.dataStorageService.getObjectValue("sitios");
    console.log(listaSitios);
    listaSitios.forEach(sitio => {
      if (sitio.id == id) {
        this.formGroupSitioEdit = this.formBuilder.group({
          id: [id, [Validators.required],],
          nombre: [sitio.nombre, [Validators.required]],
          img: [sitio.img, [Validators.required]],
          descripcion: [sitio.descripcion, [Validators.required, Validators.minLength(15)]],
          horario: [sitio.horario],
          videoYB: [sitio.videoYB],
        });
      }
    });
  } 

  guardarData = () => {

    console.log(this.formGroupSitioEdit);
    if (this.formGroupSitioEdit.valid) {
      let sitioIndex = -1;
      const listaSitios = this.dataStorageService.getObjectValue("sitios");
      listaSitios.forEach((noticia, index) => {
        if (noticia.Id == this.formGroupSitioEdit.value.Id) {
          sitioIndex = index;
        }
      });

      if (sitioIndex >= 0) {
        listaSitios[sitioIndex] = this.formGroupSitioEdit.value;
      } else {
        listaSitios.push(this.formGroupSitioEdit.value);
      }
     

      this.dataStorageService.setObjectValue("sitios", listaSitios);

      alert("Información guardada");
    } else {
      alert("Debe completar la información correctamente");
    }
  }

}
