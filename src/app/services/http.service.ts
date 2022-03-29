import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private countries: Country[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Country[]>('https://restcountries.com/v3.1/all')
      .subscribe(c => this.countries = c)
  }

  get nations() {
    return this.countries;
  }
}

export interface Country {
  name: {
    common: string;
    nativeName?: {};
    official?: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg?: string;
  };
  subregion?: string;
  tld?: Array<string>;
  currencies?: {};
  languages?: {};
  borders?: string[];
}
