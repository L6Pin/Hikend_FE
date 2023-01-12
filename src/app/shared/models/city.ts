export interface City {
  mountains: CityMountains[];
  photo_url: string;
  id: number;
  name: string;
}

export interface CityMountains {
  name: string;
  id: number;
  distance: number;
  photo_url: string;
}
