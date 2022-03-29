import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
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
