import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() country: Country | any= {
    name: {
      common: ''
    },
    population: 0,
    region: '',
    capital: '',
    flags: {
      png: ''
    }
  };

  constructor() {

   }

  ngOnInit(): void {
  }

}
