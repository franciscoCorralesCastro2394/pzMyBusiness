import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataStorage:DataStorageService,
              private router:Router ) { }

  ngOnInit() {
  }

   IngresarLogin(){
     console.log(this.router.navigate);
     this.router.navigate(['login']);
   } 

}
