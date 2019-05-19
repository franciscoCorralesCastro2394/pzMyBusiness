import { Injectable } from '@angular/core';
import { Usuario  } from '../interfaces/heroes.interfaces';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 

   private UsuarioCollectionName = 'usuarios';
  constructor(private angularFirestore: AngularFirestore ) {

   }

   getAllUaurios(): Observable<Usuario[]> {
    return this.angularFirestore.collection<Usuario>('usuarios').valueChanges();
  }


   saveUsuario(user: Usuario){
    this.angularFirestore.collection<Usuario>('usuarios').add(user);
  }

  getAllEditores(): Observable<Usuario[]> {
    return this.angularFirestore.collection<Usuario>('usuarios', ref => ref.where('Editor','==',true)).valueChanges();
  }

  setSitio(user:Usuario) {
    this.angularFirestore.collection<Usuario>('usuarios').doc(user.id.toString()).update(user);
  }

}
