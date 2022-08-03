import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  input = new FormControl('');
  regions = ['Africa', 'Americas', 'Antarctic Ocean', 'Asia', 'Europe', 'Oceania'];
  @Output() searchValue = new EventEmitter<string>();
  @Output() filterByRegion = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    this.searchValue.emit(value);
  }

  onFilterByRegion(region: string) {
    this.filterByRegion.emit(region);
  }

}
