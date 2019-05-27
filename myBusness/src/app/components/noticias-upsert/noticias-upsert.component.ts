import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators ,FormArray, FormControl } from '@angular/forms';
import { DataStorageService} from '../../services/data-storage.service';
import { Noticia} from '../../interfaces/noticia.interface';
import swal from 'sweetalert';
import { NoticiaServiceService } from '../../services/noticiasServices/noticia-service.service';
import { Router } from '@angular/router';
import { Upload } from 'src/app/clases/upload.class';
import { UpLoadServiceService } from 'src/app/services/upLoad/up-load-service.service'



@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  noticiaId:number = 0;
  formGroup: FormGroup;
  IdNot: number = 0; 
  NoticiaCreatedId: string;
  formGroupNoticiasEditImagenes:FormGroup;
  currentUpload: Upload;
  selectedFiles: FileList;

  constructor(private activatedRoute:ActivatedRoute, 
              private formBuilder:FormBuilder, 
              private dataStorageService:DataStorageService,
              private NoticiaService:NoticiaServiceService,
              private router:Router,
              private upLoadServiceService:UpLoadServiceService
              ) { 

    this.noticiaId = this.activatedRoute.snapshot.params['id'];
    this.iniciarImagenes();
   if(this.noticiaId){
     this.cargarNoticia(this.noticiaId);
    }else{
      this.iniciarNoticia();
    }
  }

  ngOnInit() {
  }

  iniciarImagenes = () => {
    this.formGroupNoticiasEditImagenes = this.formBuilder.group({
      imagenes: this.formBuilder.array([Validators.required])
    });
  }

  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      Id: ['',],
      Titulo: ['', [Validators.required]],
      Descripcion: ['', [Validators.required, Validators.minLength(15)]],
      FechaCreacion: ['',Validators.required],
      UltimaModificacion: ['',Validators.required],
    });
  }

  cargarNoticia = (id: number) => {
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

  guardarData() {
   if (this.formGroup.valid){
     let noticia:Noticia = {
       Descripcion : this.formGroup.value.Descripcion,
       Imagen : '',
       Titulo : this.formGroup.value.Titulo,
       fechaCreacion : new Date,
       ultimaModificacion : new Date,
       Id : ''
     } 
      this.NoticiaCreatedId = this.NoticiaService.saveNoticia(noticia);
      swal("Noticia Creada", "Exito", "success");
   }
  }


  borrarImagen = ($event, index) => { 
    (<FormArray>this.formGroupNoticiasEditImagenes.controls['imagenes']).removeAt(index); 
}

   agregarImagen = (imagen?: string, ) => {
  (<FormArray>this.formGroupNoticiasEditImagenes.controls['imagenes']).push(
    new FormControl(imagen, Validators.required)
  );
}

detectFiles(event: any) {
  this.selectedFiles = event.target.files;
}

uploadSingle() {
  let file = this.selectedFiles.item(0);
  this.currentUpload = new Upload(file);
   debugger
   this.upLoadServiceService.pushUpload(this.currentUpload, this.NoticiaCreatedId,'noticias');
}



}
