import { MountainCoordinates } from "./mountain";

export interface City {
  mountains: CityMountains[];
  photo_url: string;
  id: number;
  name: string;
  county: string
  coordinates: MountainCoordinates;
}

export interface CityMountains {
  name: string;
  id: number;
  distance: number;
  photo_url: string;
  coordinates: MountainCoordinates;
  height: number;
}
