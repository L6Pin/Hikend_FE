import { Injectable } from '@angular/core';
import { CityMountains } from '../../models/city';
import { MountainListSortService } from '../mountain-list-sort/mountain-list-sort.service';

@Injectable({
  providedIn: 'root'
})
export class MountainListFilterService {

  constructor(private citySort: MountainListSortService) { }

  filterMountains(userInput: string, cityMountains: CityMountains[]) {
    let cityMountainsListChanged: CityMountains[] = cityMountains
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
