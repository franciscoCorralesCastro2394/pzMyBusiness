import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { Usuario }  from '../../interfaces/heroes.interfaces';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  currentUser: Usuario;
  userSuscription: Subscription;
  constructor(private angularFireAuth:AngularFireAuth,
              private router: Router,
              private usuariosService:UsuariosService)
     { }


  login(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((value) => {
      this.setCurrentUser(email);
      this.router.navigate(['/user-info/' + email]);
    }).catch((error) => {
      swal("Error al hacer login", "Error", "error");
    });
  }


  getUsuario(): Usuario {
    return this.currentUser;
  }

  setCurrentUser(email: string) {
    this.userSuscription = this.usuariosService.getUsuarioByEmail(email).subscribe((usuarios) => {
      this.currentUser = usuarios[0];
    });
  }


  register(user: Usuario) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.Email, user.pass).then((result) => {
      user.id = result.user.uid;
      this.usuariosService.saveUsuario(user);
      swal("Usuario registrado con exito", "exito", "success");     
      this.login(user.Email, user.pass);
    }).catch((error) => {
      swal("Error al resgistrar", "Error", "error");
    });
  }

  logout() {
    this.currentUser = null;
    this.angularFireAuth.auth.signOut();
    swal("Cierre de sesion", "exito", "success");     
    this.router.navigateByUrl('home');
  }


}






