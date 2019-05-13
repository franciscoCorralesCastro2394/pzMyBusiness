import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Sitio } from '../../interfaces/sitio.interface';
import { Observable } from 'rxjs';
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
  sitios:any[] = [];
  sitios$:Observable<any>;
  idSit:number = 0; 
  users:any[] = [];
  users$:Observable<any>;
  editores:any[] = [];
  
  constructor(private activatedRoute:ActivatedRoute, 
              private formBuilder:FormBuilder, 
              private dataStorageService:DataStorageService,
              private router:Router,
              private sitioServiceService:SitioServiceService,
              private usuariosService:UsuariosService
      ) {
   
    this.sitioId = this.activatedRoute.snapshot.params['id'];
    //this.sitios = this.dataStorageService.getObjectValue("sitios");
    //this.users = this.dataStorageService.getObjectValue("users");

   

    this.idSit = this.sitios.length + 1;
    console.log(this.sitioId);

    if(this.sitioId){
      this.cargarNoticia(this.sitioId);   
    }else{
      this.iniciarNoticia();
    }



   }
   



   ngOnInit() {
    
    this.obtenerSitiosUsuarios();
  
  }

   obtenerSitiosUsuarios(){
    this.sitios$ = this.sitioServiceService.getAllSitios();
    this.sitios$.subscribe((UserData:Sitio[]) => {this.sitios = UserData;});
    console.log(this.sitios);   
  

    
    this.users$ =  this.usuariosService.getAllUaurios();
    this.users$.subscribe((usersData:Usuario[]) =>{
      this.users = usersData;
    });
    console.log(this.users);
    // this.users$.subscribe((UserData:Usuario[]) => {this.users = UserData;});
    // console.log(this.users);
  }


  iniciarNoticia = () => {


    this.users.forEach( user => {
      if(user.Editor){
        this.editores.push(user);
      }
});
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
    console.log(this.sitios);
    console.log(this.users);
    
    if (this.formGroupSitioEdit.valid) {
      // let sitioIndex = -1;
      // const listaSitios = this.sitios;//this.dataStorageService.getObjectValue("sitios");
      // listaSitios.forEach((sitio, index) => {
      //   if (sitio.Id == this.formGroupSitioEdit.value.id) {
      //     sitioIndex = index;
      //   }
      // });

      // if (sitioIndex >= 0) {
      //   listaSitios[sitioIndex] = this.formGroupSitioEdit.value;
      // } else {
      //   listaSitios.push(this.formGroupSitioEdit.value);
      // }
     

      // this.dataStorageService.setObjectValue("sitios", listaSitios);
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
       this.sitioServiceService.savSitios(sitio);


      swal("Exito", "Información guardada con exito", "success");
      this.router.navigate(['/sitios-list']);
    } else {
      swal("Debe completar la información correctamente", "Intente de nuevo", "error");
    }
  }

}
