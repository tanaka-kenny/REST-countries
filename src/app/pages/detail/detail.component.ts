import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  country: Country | any;;

  constructor(
    http: HttpService,
    route: ActivatedRoute) {
      let c = route.snapshot.paramMap.get('country');  
      http.allNations().subscribe(countries => {
        this.country = countries.find(country => country.name === c)
      });
   }

  ngOnInit(): void {
  }

}
