import { Injectable } from '@angular/core';
import { CityMountains } from '../../models/city';

@Injectable({
  providedIn: 'root'
})
export class MountainListSortService {

  constructor() { }

  sortMountains(selectedSort: string, cityMountainsListChanged: CityMountains[]) {
    if (selectedSort == "Alphabetical-Ascending") 
      this.sortMountainsByAlphabeticalOrder(cityMountainsListChanged)

    if (selectedSort == "Alphabetical-Descending") 
      this.sortMountainsByReverseAlphabeticalOrder(cityMountainsListChanged);

    if (selectedSort == "Closest") 
      this.sortMountainsByClosest(cityMountainsListChanged);
      
    if (selectedSort == "Furtest") 
      this.sortMountainsByFurthest(cityMountainsListChanged);

    return cityMountainsListChanged
  }

  sortMountainsByAlphabeticalOrder(cityMountainsListChanged: CityMountains[]) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a, b) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA > mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByReverseAlphabeticalOrder(cityMountainsListChanged: CityMountains[]) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a, b) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA < mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByClosest(cityMountainsListChanged: CityMountains[]) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a, b) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA > mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByFurthest(cityMountainsListChanged: CityMountains[]) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a, b) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA < mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }
}
