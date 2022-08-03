import { Pipe, PipeTransform } from '@angular/core';
import { Country, REGIONS } from './models/country.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  /**
   * 
   * @param countries => the list of countries to be filtered
   * @param searchText => the criteria for searching
   * @returns => a list of filtered countries
   */

  transform(countries: Country[], searchText: string): Country[] {
    if (!countries)
      return [];
    if (!searchText)
      return countries;

    const regions = REGIONS.map(r => r.toLowerCase());
    searchText = searchText.toLocaleLowerCase();
    if (regions.indexOf(searchText) <= -1) { // its a text search, filter by name
      return countries.filter(c => {
        return c['name'].toLocaleLowerCase().includes(searchText);
      }); 
    } else {
      return countries.filter(c => {
        return c['region'].toLocaleLowerCase().includes(searchText);
      }); 
    }
  }
}
