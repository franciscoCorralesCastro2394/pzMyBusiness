import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre:string="Francisco A Corrales Castro";
  curso:string="Programación Web - UNA";
 num:number = 1224434356436567475687698;
 fechaNacimiento= new Date(1995,2,13);
 fechaActual= new Date();


  constructor() { }

  ngOnInit() {
  }

}
