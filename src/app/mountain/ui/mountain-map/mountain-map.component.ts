import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MountainCoordinates } from 'src/app/shared/models/mountain';


@Component({
  selector: 'app-mountain-map',
  templateUrl: './mountain-map.component.html',
  styleUrls: ['./mountain-map.component.scss']
})
export class MountainMapComponent implements OnInit {

  @Input() coordinates!: MountainCoordinates;
  @Input() youtubeVideo: string = ""
  private map!: L.Map;
  private centroid: L.LatLngExpression = [0, 0];
  private marker = new L.Marker([0, 0])

  private setCoordinates(lat: number, long: number) {
    this.centroid = [lat, long]
  }

  private setMarker(lat: number, long: number, youtubeLink: string) {
    this.marker = new L.Marker([lat, long])
      .bindPopup(youtubeLink)
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });


    this.map.zoomControl.setPosition('bottomleft');
    this.marker.addTo(this.map);
    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    this.setCoordinates(this.coordinates.lat, this.coordinates.long)
    this.setMarker(this.coordinates.lat, this.coordinates.long, this.youtubeVideo)
    this.initMap();
  }

}
