import { Injectable } from '@angular/core';
import { MountainListSortService } from '../mountain-list-sort/mountain-list-sort.service';

@Injectable({
  providedIn: 'root'
})
export class MountainListFilterService {

  constructor(private citySort: MountainListSortService) { }

  filterMountains(userInput: any, cityMountains: any) {
      let cityMountainsFiltered: any[] = cityMountains
      let noSearchResults: boolean = false

      if (userInput === "") {
          noSearchResults = false
      }
      else {
          cityMountainsFiltered = cityMountainsFiltered.filter(mountain => mountain.name.toLowerCase().includes(userInput.toLowerCase()))
          noSearchResults = false
          if (cityMountainsFiltered.length === 0) {
              noSearchResults = true
          }
      }

      this.citySort.sortMountains("Alphabetical-Ascending", cityMountainsFiltered)
      return { cityMountainsFiltered, noSearchResults }
  }
}
