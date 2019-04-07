import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  formGroupRegister: FormGroup;
  selector:number = 0;
  users:any[] = [];
  constructor(private formBuilder:FormBuilder,  private router:Router,private activatedRoute:ActivatedRoute,private dataStorageService:DataStorageService) { 
    
    this.selector = this.activatedRoute.snapshot.params['selector'];
    console.log(this.selector);
    this.iniciarLogin();
    this.iniciarRegister();
  }

  ngOnInit() {

  }
  loginSeguro(){

    this.users = this.dataStorageService.getObjectValue("users");
    console.log(this.users);
    let contro:boolean = false;
    this.users.forEach((user, index) => {
      if (user.Email === this.formGroupLogin.value.Identificacion && 
          user.pass === this.formGroupLogin.value.Pass) {
          contro = true;
      }
    });


    if(contro){
      this.router.navigate(['/user-info']);
    }else{
      alert("Usuario no existe"); 
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
      ConfirmPassword: ['', [Validators.required]]
    });
  }


  registrar = () => {

    console.log(this.formGroupRegister);
    if (this.formGroupRegister.valid) {
    
      const listaUsers = this.dataStorageService.getObjectValue("users");
     
 
      listaUsers.push(this.formGroupRegister.value);


      this.dataStorageService.setObjectValue("users", listaUsers);

      alert("Información guardada");
      this.router.navigate(['/login/0']);
    } else {
      alert("Debe completar la información correctamente");
    }
  }




}
