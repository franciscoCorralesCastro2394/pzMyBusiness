import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SitioServiceService } from '../../services/sitiosServices/sitio-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-buscar-sitios',
  templateUrl: './buscar-sitios.component.html',
  styleUrls: ['./buscar-sitios.component.css']
})
export class BuscarSitiosComponent implements OnInit {

  constructor(private data:SitioServiceService, private activateRoute: ActivatedRoute) { }
  sitios$:Observable<any>;

  termino:string;
  ngOnInit() {
  	this.activateRoute.params.subscribe(params => {
      this.termino = params['id'];
   });
   this.sitios$ = this.data.searchSitio(this.termino);
  }

}
