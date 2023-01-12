export interface Mountain {
  id: number;
  routes: MountainRoutes[];
  photo_url: string;
  saved: boolean;
  yt: string;
  hikingClubs: HikingClubs[];
  info: MountainInfo;
  name: string;
}

export interface MountainUpdated {
  routes: MountainRoutes[];
  photo_url: string;
  saved: boolean;
  yt: string;
  hikingClubs: HikingClubs[];
  info: MountainInfo;
  name: string;
}

export interface MountainRoutes {
  timeRequired: string;
  gpx: string;
  number: number;
  difficulty: string;
  name: string;
  length: string;
}

export interface HikingClubs {
  logo: string;
  name: string;
  contact: string;
}

export interface MountainInfo {
  peak: string;
  description: string;
  height: number;
  coordinates: MountainCoordinates;
}

export interface MountainCoordinates {
  long: number;
  lat: number;
}
