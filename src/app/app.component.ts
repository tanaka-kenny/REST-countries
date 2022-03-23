import { Component } from '@angular/core';
import { Country, HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countries: Country[] = []

  constructor(http: HttpService) {
    http.getAll()
      .subscribe(c => this.countries = c)
  }
}
