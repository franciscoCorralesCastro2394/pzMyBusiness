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

  private respColletionName = 'respuestas';
  constructor(private angularFirestore:AngularFirestore){ } 
  

  getAllRespuestas(): Observable<Respuesta[]> {
    return this.angularFirestore.collection<Respuesta>(this.respColletionName).valueChanges();
  }

   saveRespuetas(resp: Respuesta){
     if(resp.idResena && resp.idResena != ''){
        this.angularFirestore.collection<Respuesta>(this.respColletionName).doc(resp.idResena).set(resp);
     }else{
      resp.idResena = this.angularFirestore.createId(); 
      this.angularFirestore.collection<Respuesta>(this.respColletionName).add(resp);
     }
    
  }


}
