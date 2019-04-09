import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-sitios-list',
  templateUrl: './sitios-list.component.html',
  styleUrls: ['./sitios-list.component.css']
})
export class SitiosListComponent implements OnInit {
  sitios:any[] = [];
  constructor(private dataStorageService:DataStorageService) {
  	this.sitios = this.dataStorageService.getObjectValue("sitios");
    
    //console.log(this.sitios);
   }

  ngOnInit() {
  }
  

}
