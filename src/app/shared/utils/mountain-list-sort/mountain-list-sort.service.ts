import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MountainListSortService {

  constructor() { }

  sortMountains(selectedSort: any, cityMountainsFiltered: any) {
    if (selectedSort == "Alphabetical-Ascending") this.sortMountainsByAlphabeticalOrder(cityMountainsFiltered)
    if (selectedSort == "Alphabetical-Descending") this.sortMountainsByReverseAlphabeticalOrder(cityMountainsFiltered);
    if (selectedSort == "Closest") this.sortMountainsByClosest(cityMountainsFiltered);
    if (selectedSort == "Furtest") this.sortMountainsByFurthest(cityMountainsFiltered);

    return cityMountainsFiltered
  }

  sortMountainsByAlphabeticalOrder(cityMountainsFiltered: any) {
    cityMountainsFiltered = cityMountainsFiltered.sort((a: any, b: any) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA > mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByReverseAlphabeticalOrder(cityMountainsFiltered: any) {
    cityMountainsFiltered = cityMountainsFiltered.sort((a: any, b: any) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA < mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByClosest(cityMountainsFiltered: any) {
    cityMountainsFiltered = cityMountainsFiltered.sort((a: any, b: any) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA > mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByFurthest(cityMountainsFiltered: any) {
    cityMountainsFiltered = cityMountainsFiltered.sort((a: any, b: any) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA < mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }
}
