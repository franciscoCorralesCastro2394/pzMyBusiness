import { Injectable } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaServiceService {
  private NoticiaCollectionName = 'noticias';
  constructor(private angularFirestore: AngularFirestore ) { }

  getAllNoticias(): Observable<Noticia[]> {
    return this.angularFirestore.collection<Noticia>('noticias').valueChanges();
  }


   saveNoticia(noticia: Noticia){
    this.angularFirestore.collection<Noticia>('noticias').add(noticia);
  }

}
