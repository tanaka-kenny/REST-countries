import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Country[] = []

  constructor(private http: HttpService) { 
  }

  ngOnInit(): void {
    this.http.allNations()
      .subscribe(c => this.countries = c)
  }

}
