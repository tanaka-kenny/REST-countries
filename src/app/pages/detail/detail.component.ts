import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  country: Country | any = {
    name: {
      common: ''
    },
    population: 0,
    region: '',
    capital: '',
    flags: {
      png: '',
    }
  };

  constructor(
    http: HttpService,
    route: ActivatedRoute) {
      let c = route.snapshot.paramMap.get('country')
      this.country = http.nations.find(m => m.name.common === c);
   }

  ngOnInit(): void {
  }

}
