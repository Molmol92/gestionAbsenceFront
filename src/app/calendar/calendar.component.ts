import { Component, OnInit } from '@angular/core';
import { AssiduiteService } from '../service/assiduite.service';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  constructor(private assiduiteService: AssiduiteService){

  }
  presence: any[] = [];

  ngOnInit(){
    this.presence = this.assiduiteService.presence;
  }
  
  

  dates: string[] =[] ;

  horaire = [
    
    "8-10",
    "10-12",
    "14-16",
    "16-18"
    
  ];

}
