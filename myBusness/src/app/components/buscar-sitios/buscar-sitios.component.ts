import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-buscar-sitios',
  templateUrl: './buscar-sitios.component.html',
  styleUrls: ['./buscar-sitios.component.css']
})
export class BuscarSitiosComponent implements OnInit {

  constructor(private data:DataStorageService, private activateRoute: ActivatedRoute) { }
  sitios:any[] = [];
  termino:String;
  ngOnInit() {
  	this.activateRoute.params.subscribe(params => {
      this.termino = params['id'];
      console.log(this.termino);
      this.sitios = this.data.buscarSitio(this.termino);
      console.log(this.sitios);
   })
  }

}
