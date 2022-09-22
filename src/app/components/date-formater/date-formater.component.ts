import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-formater',
  templateUrl: './date-formater.component.html',
  styleUrls: ['./date-formater.component.scss']
})
export class DateFormaterComponent implements OnInit {
  datePicker: string = '';
  dateText: string = '';

  constructor() { }
  
  ngOnInit(): void {
    
  }

  dateValue(){
    let input = document.getElementById('btn');

  }

}
