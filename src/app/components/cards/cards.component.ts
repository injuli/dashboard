import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {
  public selectOptions = [
    'Last Created',
    'Another Modified',
    'Last Opened',
    'Alphabetically'
  ];


    public selectedOption = 'Last Created';




}
