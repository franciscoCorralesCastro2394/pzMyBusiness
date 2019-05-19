import { Injectable } from '@angular/core';
import { sitioSeguido } from '../../interfaces/sitiosSeguidos.interfaces';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SitioSeguidoServiceService {

  constructor(private angularFirestore: AngularFirestore ) { }


  getAllSitiosSeguidos(): Observable<sitioSeguido[]> {
    return this.angularFirestore.collection<sitioSeguido>('sitiosSeguidos').valueChanges();
  }


   saveSitiosSeguisdos(sSeguido: sitioSeguido){
    this.angularFirestore.collection<sitioSeguido>('sitiosSeguidos').add(sSeguido);
  }
}
