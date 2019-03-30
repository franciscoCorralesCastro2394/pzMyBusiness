import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.iniciarLogin();
  }

  ngOnInit() {
  }



  iniciarLogin = () => {
    this.formGroupLogin = this.formBuilder.group({
       Identificacion: ['', [Validators.required]],
       Pass: ['', [Validators.required]]
    });
  }

}
