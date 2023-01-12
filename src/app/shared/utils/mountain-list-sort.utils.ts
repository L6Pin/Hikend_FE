import { CityMountains } from '../models/city';

export function sortMountains(
  selectedSort: string,
  cityMountainsListChanged: CityMountains[]
) {
  if (selectedSort == 'Alphabetical-Ascending')
    sortMountainsByAlphabeticalOrder(cityMountainsListChanged);

  if (selectedSort == 'Alphabetical-Descending')
    sortMountainsByReverseAlphabeticalOrder(cityMountainsListChanged);

  if (selectedSort == 'Closest')
    sortMountainsByClosest(cityMountainsListChanged);

  if (selectedSort == 'Furtest')
    sortMountainsByFurthest(cityMountainsListChanged);

  return cityMountainsListChanged;
}

export function sortMountainsByAlphabeticalOrder(
  cityMountainsListChanged: CityMountains[]
) {
  cityMountainsListChanged = cityMountainsListChanged.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
}

function sortMountainsByReverseAlphabeticalOrder(
  cityMountainsListChanged: CityMountains[]
) {
  cityMountainsListChanged = cityMountainsListChanged.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
  );
}

function sortMountainsByClosest(cityMountainsListChanged: CityMountains[]) {
  cityMountainsListChanged = cityMountainsListChanged.sort(
    (a, b) => a.distance - b.distance
  );
}

function sortMountainsByFurthest(cityMountainsListChanged: CityMountains[]) {
  cityMountainsListChanged = cityMountainsListChanged.sort(
    (a, b) => b.distance - a.distance
  );
}
