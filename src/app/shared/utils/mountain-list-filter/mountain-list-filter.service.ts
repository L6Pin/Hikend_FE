import { Injectable } from '@angular/core';
import { MountainListSortService } from '../mountain-list-sort/mountain-list-sort.service';

@Injectable({
  providedIn: 'root'
})
export class MountainListFilterService {

  constructor(private citySort: MountainListSortService) { }

  filterMountains(userInput: any, cityMountains: any) {
    let cityMountainsListChanged: any[] = cityMountains
    let noSearchResults: boolean = false

    if (userInput === "") {
      noSearchResults = false
    }
    else {
      cityMountainsListChanged = cityMountainsListChanged.filter(mountain => 
        mountain.name.toLowerCase().includes(userInput.toLowerCase()))
      noSearchResults = false
      if (cityMountainsListChanged.length === 0) {
        noSearchResults = true
      }
    }

    this.citySort.sortMountains("Alphabetical-Ascending", cityMountainsListChanged)
    return { cityMountainsListChanged, noSearchResults }
  }
}
