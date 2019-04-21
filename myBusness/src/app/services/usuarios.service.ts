import { Injectable } from '@angular/core';
import { Usuario  } from '../interfaces/heroes.interfaces';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 
   usurioURL:string = '/firebase_conxion'; 
   private UsuarioCollectionName = 'usuarios';
  constructor(private db: AngularFirestore ) {

   }

   getTodos(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Usuario>(this.UsuarioCollectionName, ref => ref.orderBy('Email', 'desc')).get();
  }

   saveUsuario(user: Usuario ): Promise<DocumentReference> {
    return this.db.collection(this.UsuarioCollectionName).add(user);
  }
}
