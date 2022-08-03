import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'src/app/models/country.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  input = new FormControl('');
  regions = ['Asia', 'Africa', 'Europe'];
  searchText: string = '';

  constructor(
    private http: HttpService,) { 
  }

  ngOnInit(): void {
    this.http.allNations()
      .subscribe(c => this.countries = c)
  }

  searchCountries(input: string) {
    this.searchText = input;
  }

}
