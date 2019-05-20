import { Injectable } from '@angular/core';
import { calificacion } from '../../interfaces/calificacion.interfaces';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesServiceService {

  constructor(private angularFirestore: AngularFirestore ) { }


  getAllCalificaciones(): Observable<calificacion[]> {
    return this.angularFirestore.collection<calificacion>('calificaciones').valueChanges();
  }


   saveCalificaciones(noticia: calificacion){
    this.angularFirestore.collection<calificacion>('calificaciones').add(noticia);
  }

}
