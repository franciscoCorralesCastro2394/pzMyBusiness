import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import swal from 'sweetalert';
import {Router} from '@angular/router';



@Component({
  selector: 'app-edit-sitio',
  templateUrl: './edit-sitio.component.html',
  styleUrls: ['./edit-sitio.component.css']
})
export class EditSitioComponent implements OnInit {
  sitioId:number;
  formGroupSitioEdit:FormGroup;
  IdSitio:number;
  sitios:any[] = [];
  idSit:number = 0; 
  users:any[] = [];
  editores:any[] = [];
  
  constructor(private activatedRoute:ActivatedRoute, 
              private formBuilder:FormBuilder, 
              private dataStorageService:DataStorageService,
              private router:Router
      ) {
   debugger
    this.sitioId = this.activatedRoute.snapshot.params['id'];
    this.sitios = this.dataStorageService.getObjectValue("sitios");
    this.users = this.dataStorageService.getObjectValue("users");

    this.users.forEach( user => {
           if(user.Editor){
             this.editores.push(user);
           }
    });


    this.idSit = this.sitios.length + 1;
    console.log(this.sitioId);

    if(this.sitioId){
      this.cargarNoticia(this.sitioId);   
    }else{
      this.iniciarNoticia();
    }
   }
   



  ngOnInit() {
  }

  iniciarNoticia = () => {
    this.formGroupSitioEdit = this.formBuilder.group({
      id: [this.idSit, [Validators.required],],
      nombre: ['', [Validators.required]],
      img: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      horario: ['',Validators.required],
      videoYB: ['',Validators.required],
      Editor: ['',Validators.required],
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
          Editor: [sitio.videoYB],
        });
      }
    });
  } 

  guardarData = () => {
     debugger
    console.log(this.formGroupSitioEdit);
    if (this.formGroupSitioEdit.valid) {
      let sitioIndex = -1;
      const listaSitios = this.dataStorageService.getObjectValue("sitios");
      listaSitios.forEach((sitio, index) => {
        if (sitio.Id == this.formGroupSitioEdit.value.id) {
          sitioIndex = index;
        }
      });

      if (sitioIndex >= 0) {
        listaSitios[sitioIndex] = this.formGroupSitioEdit.value;
      } else {
        listaSitios.push(this.formGroupSitioEdit.value);
      }
     

      this.dataStorageService.setObjectValue("sitios", listaSitios);

      swal("Exito", "Información guardada con exito", "success");
      this.router.navigate(['/sitios-list']);
    } else {
      swal("Debe completar la información correctamente", "Intente de nuevo", "error");
    }
  }

}
