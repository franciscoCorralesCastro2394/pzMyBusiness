import { Injectable } from '@angular/core';
import { Respuesta } from '../../interfaces/respuesta.interface';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestasServiceService {

  constructor(private angularFirestore:AngularFirestore){ } 
  

  getAllRespuestas(): Observable<Respuesta[]> {
    return this.angularFirestore.collection<Respuesta>('respuestas').valueChanges();
  }

   saveRespuetas(resp: Respuesta){
    this.angularFirestore.collection<Respuesta>('respuestas').add(resp);
  }


}
