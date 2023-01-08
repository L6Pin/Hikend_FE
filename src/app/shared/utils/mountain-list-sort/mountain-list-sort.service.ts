import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MountainListSortService {

  constructor() { }

  sortMountains(selectedSort: any, cityMountains: any) {
    if (selectedSort == "Alphabetical-Ascending") this.sortMountainsByAlphabeticalOrder(cityMountains)
    if (selectedSort == "Alphabetical-Descending") this.sortMountainsByReverseAlphabeticalOrder(cityMountains);
    if (selectedSort == "Closest") this.sortMountainsByClosest(cityMountains);
    if (selectedSort == "Furtest") this.sortMountainsByFurthest(cityMountains);

    return cityMountains
  }

  sortMountainsByAlphabeticalOrder(cityMountains: any) {
    cityMountains = cityMountains.sort((a: any, b: any) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA > mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByReverseAlphabeticalOrder(cityMountains: any) {
    cityMountains = cityMountains.sort((a: any, b: any) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA < mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByClosest(cityMountains: any) {
    cityMountains = cityMountains.sort((a: any, b: any) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA > mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByFurthest(cityMountains: any) {
    cityMountains = cityMountains.sort((a: any, b: any) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA < mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }
}
