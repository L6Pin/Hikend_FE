import { CityMountains } from '../models/city';
import { sortMountains } from './mountain-list-sort.utils';

export function filterMountains(
  userInput: string,
  cityMountains: CityMountains[]
) {
  let cityMountainsListChanged: CityMountains[] = cityMountains;
  let noSearchResults: boolean = false;

  if (userInput === '') {
    noSearchResults = false;
  } else {
    cityMountainsListChanged = cityMountainsListChanged.filter((mountain) =>
      mountain.name.toLowerCase().includes(userInput.toLowerCase())
    );
    noSearchResults = false;
    if (cityMountainsListChanged.length === 0) {
      noSearchResults = true;
    }
  }

  sortMountains('Alphabetical-Ascending', cityMountainsListChanged);
  return { cityMountainsListChanged, noSearchResults };
}
