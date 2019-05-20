import { Injectable } from '@angular/core';
import { comentario } from '../../interfaces/comentario.interface';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private angularFirestore: AngularFirestore ) { }

  getAllComentarios(): Observable<comentario[]> {
    return this.angularFirestore.collection<comentario>('comentarios').valueChanges();
  }


   saveComentario(com: comentario){
    this.angularFirestore.collection<comentario>('comentarios').add(com);
  }

}

