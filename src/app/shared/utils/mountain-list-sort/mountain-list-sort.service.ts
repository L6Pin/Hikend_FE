import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MountainListSortService {

  constructor() { }

  sortMountains(selectedSort: any, cityMountainsListChanged: any) {
    if (selectedSort == "Alphabetical-Ascending") this.sortMountainsByAlphabeticalOrder(cityMountainsListChanged)
    if (selectedSort == "Alphabetical-Descending") this.sortMountainsByReverseAlphabeticalOrder(cityMountainsListChanged);
    if (selectedSort == "Closest") this.sortMountainsByClosest(cityMountainsListChanged);
    if (selectedSort == "Furtest") this.sortMountainsByFurthest(cityMountainsListChanged);

    return cityMountainsListChanged
  }

  sortMountainsByAlphabeticalOrder(cityMountainsListChanged: any) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a: any, b: any) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA > mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByReverseAlphabeticalOrder(cityMountainsListChanged: any) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a: any, b: any) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA < mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByClosest(cityMountainsListChanged: any) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a: any, b: any) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA > mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByFurthest(cityMountainsListChanged: any) {
    cityMountainsListChanged = cityMountainsListChanged.sort((a: any, b: any) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA < mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }
}
