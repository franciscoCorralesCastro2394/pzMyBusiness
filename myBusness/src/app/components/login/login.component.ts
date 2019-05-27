import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { LoginService } from '../../services/loginSeguro/login.service';
import { Usuario } from '../../interfaces/heroes.interfaces';
import swal from 'sweetalert';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  formGroupRegister: FormGroup;
  selector:number = 0;
  users$:Observable<any>;
  users:Usuario[] = []; 
  constructor(private formBuilder:FormBuilder,  
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private usuariosService:LoginService,
              private userS:UsuariosService,
   ) { 

    this.selector = this.activatedRoute.snapshot.params['selector'];
    this.iniciarLogin();
    this.iniciarRegister();
  }

  ngOnInit() {
    
   this.users$ = this.userS.getAllUaurios();    
   this.users$.subscribe((UserData:Usuario[]) => {
    this.users = UserData;
        });
  }


  loginSeguro(){
    if(this.formGroupLogin.valid){
      this.usuariosService.login(this.formGroupLogin.value.Identificacion,this.formGroupLogin.value.Pass);
    }else{
      swal("Usuario no existe", "Intente de nuevo", "error");
    }
   }

  iniciarLogin = () => {
    this.formGroupLogin = this.formBuilder.group({
       Identificacion: ['', [Validators.required]],
       Pass: ['', [Validators.required]]
    });
  }

  iniciarRegister = () => {
    this.formGroupRegister = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      Admin:[],
      Editor:[]
    });
  }

  registrar = () => {

if(this.formGroupRegister.valid){

   if(!this.formGroupRegister.value.Admin){
      this.formGroupRegister.value.Admin = false;
    }
    if(!this.formGroupRegister.value.Editor){
      this.formGroupRegister.value.Editor = false;
    }
    let usuarioNuevo:Usuario = { 
      Admin : this.formGroupRegister.value.Admin,
      ConfirmPassword: this.formGroupRegister.value.ConfirmPassword,
      Editor : this.formGroupRegister.value.Editor,
      Email : this.formGroupRegister.value.Email,
      FirstName : this.formGroupRegister.value.FirstName,
      Imagen : this.formGroupRegister.value.Imagen,
      LastName : this.formGroupRegister.value.LastName,
      Phone : this.formGroupRegister.value.Phone,
      pass : this.formGroupRegister.value.pass
    }
    this.usuariosService.register(usuarioNuevo);
    swal("Usuario Registrado", "Exito", "success");

    }
  }

  





}
