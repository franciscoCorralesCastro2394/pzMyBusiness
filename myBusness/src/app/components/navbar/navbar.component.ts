import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataStorage:DataStorageService ) { }

  ngOnInit() {
  }



}
