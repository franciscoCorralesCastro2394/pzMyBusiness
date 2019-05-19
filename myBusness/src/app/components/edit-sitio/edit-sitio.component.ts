import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Sitio } from '../../interfaces/sitio.interface';
import { Observable, Subscription } from 'rxjs';
import { SitioServiceService } from '../../services/sitiosServices/sitio-service.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from 'src/app/clases/Usuario';




@Component({
  selector: 'app-edit-sitio',
  templateUrl: './edit-sitio.component.html',
  styleUrls: ['./edit-sitio.component.css']
})
export class EditSitioComponent implements OnInit {
  sitioId:number;
  formGroupSitioEdit:FormGroup;
  IdSitio:number;
  sitios:any[] = [];;
  sitios$:Observable<any>;
  idSit:number = 0; 
  users:any[] = [];
  editores$:Observable<any>;
  prueba:Subscription;
  
  constructor(private activatedRoute:ActivatedRoute, 
              private formBuilder:FormBuilder, 
              private dataStorageService:DataStorageService,
              private router:Router,
              private sitioServiceService:SitioServiceService,
              private usuariosService:UsuariosService
      ) {
    this.sitioId = this.activatedRoute.snapshot.params['id'];
    this.obtenerSitiosUsuarios();
    console.log(this.sitioId);

   }
   

   ngOnInit() {
  
    if(!this.sitioId){
      this.iniciarSitio();
    }
  }

 obtenerSitiosUsuarios(){
  debugger
 
  if(this.sitioId){
    this.sitioServiceService.getAllSitios().subscribe(data => {
      this.sitios = data;
      this.cargarSitio(this.sitioId); 
    });
  }
 
   
  
    this.editores$ =  this.usuariosService.getAllEditores();
    this.editores$.subscribe((usersData:Usuario[]) =>{
      this.users = usersData;
    });
  }


  iniciarSitio = () => {

    this.formGroupSitioEdit = this.formBuilder.group({
      id: ['', [Validators.required],],
      nombre: ['', [Validators.required]],
      img: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      horario: ['',Validators.required],
      videoYB: ['',Validators.required],
      Editor: ['',Validators.required],
    });
  }

  cargarSitio = (id: number) => {
    
    debugger
    console.log(this.sitios);
    const listaSitios = this.sitios;
   
    listaSitios.forEach(sitio => {
      if (sitio.id == id) {
        this.formGroupSitioEdit =  this.formBuilder.group({
          id: [id, [Validators.required],],
          nombre: [sitio.nombre, [Validators.required]],
          img: [sitio.img, [Validators.required]],
          descripcion: [sitio.descripcion, [Validators.required, Validators.minLength(15)]],
          horario: [sitio.horario],
          videoYB: [sitio.videoYB],
          Editor: [sitio.Editor],
        });
      }
    });
  } 

  guardarData = () => {
     
    debugger
    console.log(this.sitios);
    console.log(this.users);
    
    if (this.formGroupSitioEdit.valid) {
       let imgs = [this.formGroupSitioEdit.value.img]; 
      let sitio:Sitio = {
        descripcion: this.formGroupSitioEdit.value.descripcion,
        horario:  this.formGroupSitioEdit.value.horario,
        id: this.formGroupSitioEdit.value.id,
        imgs: imgs,
        img: this.formGroupSitioEdit.value.img,
        nombre: this.formGroupSitioEdit.value.nombre,
        videoYB: this.formGroupSitioEdit.value.videoYB, 
        Editor:  this.formGroupSitioEdit.value.Editor  
      }

      if(this.sitioId){
       this.sitioServiceService.setSitio(sitio);   
      }else{
        this.sitioServiceService.savSitios(sitio);
      }
     
      swal("Exito", "Información guardada con exito", "success");
      this.router.navigate(['/sitios-list']);
    } else {
      swal("Debe completar la información correctamente", "Intente de nuevo", "error");
    }
  }

}
