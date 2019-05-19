import { Injectable } from '@angular/core';
import { Sitio } from '../../interfaces/sitio.interface';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitioServiceService {

  private sitiosCollectionName = 'sitios';
  constructor(private angularFirestore: AngularFirestore ) { }

  getAllSitios(): Observable<Sitio[]> {
    return this.angularFirestore.collection<Sitio>('sitios').valueChanges();
  }

   savSitios(sitio: Sitio){
    this.angularFirestore.collection<Sitio>('sitios').add(sitio);
  }

  setSitio(sitio:Sitio) {//chiko
    this.angularFirestore.collection<Sitio>('sitios').doc(sitio.id.toString()).update(sitio);
  }

  
  searchSitio(term:string){
    return  this.angularFirestore.collection<Sitio>('sitios', ref => ref.where('nombre','==',term)).valueChanges();
  }



}
