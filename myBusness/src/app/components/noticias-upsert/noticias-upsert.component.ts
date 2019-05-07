import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DataStorageService} from '../../services/data-storage.service';
import {Noticia} from '../../clases/noticia';
import {Usuario} from '../../clases/Usuario';
import swal from 'sweetalert';
import {Router} from '@angular/router';



@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  noticiaId:number = 0;
  formGroup: FormGroup;
  IdNot: number = 0; 

  constructor(private activatedRoute:ActivatedRoute, 
              private formBuilder:FormBuilder, 
              private dataStorageService:DataStorageService,
              private router:Router
              ) { 

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
  }



  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      Id: [this.IdNot, [Validators.required],],
      Titulo: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],
      Descripcion: ['', [Validators.required, Validators.minLength(15)]],
      FechaCreacion: ['',Validators.required],
      UltimaModificacion: ['',Validators.required],
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

      swal("Exito", "Información guardada con exito", "success");
      this.router.navigate(['/noticias-list']);
    } else {
      swal("Debe completar la información correctamente", "Intente de nuevo", "error");
    }
  }


}
