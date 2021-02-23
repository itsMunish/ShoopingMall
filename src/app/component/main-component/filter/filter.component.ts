import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  numfromat(value:number){
    if(value >= 10000){
      return Math.round(value/1000)+'k';
      
    }
    return value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
