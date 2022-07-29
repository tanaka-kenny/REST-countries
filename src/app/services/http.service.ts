import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private restUrl = environment.restCountries;

  constructor(private http: HttpClient) {
    this.http.get<Country[]>(`${this.restUrl}/all`)
      .subscribe(c => {
        console.log(c)
      })
  }

  allNations():Observable<Country[]> {
    return this.http.get<Country[]>(`${this.restUrl}/all`)
  }
}