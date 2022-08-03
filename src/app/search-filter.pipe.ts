import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './models/country.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(countries: Country[], searchText: string): Country[] {
    if (!countries)
      return [];
    if (!searchText)
      return countries;
    searchText = searchText.toLocaleLowerCase();
    return countries.filter(c => {
      return c['name'].toLocaleLowerCase().includes(searchText);
    }); 
  }
}
