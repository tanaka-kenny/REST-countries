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

  constructor(
    private http: HttpService,) { 
  }

  ngOnInit(): void {
    this.http.allNations()
      .subscribe(c => this.countries = c)
  }

  searchCountries(input: string) {
    let searchedCountries: Country[] = [];
    for (let c of this.countries) {
      if (c['name'].toLowerCase().includes(input.toLowerCase())) 
        searchedCountries.push(c)
        console.log(searchedCountries)
    }
    this.countries = searchedCountries;
    
  }

}
