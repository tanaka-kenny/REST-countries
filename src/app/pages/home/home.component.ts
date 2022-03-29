import { Component, OnInit } from '@angular/core';
import { Country, HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: Country[] = []

  constructor(http: HttpService) { 
    http.getAll().subscribe(c => this.countries = c);
  }

  ngOnInit(): void {
  }

}
