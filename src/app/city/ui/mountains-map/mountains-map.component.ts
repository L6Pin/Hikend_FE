import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CityMountains } from 'src/app/shared/models/city';
import { MountainCoordinates } from 'src/app/shared/models/mountain';

@Component({
  selector: 'app-mountains-map',
  templateUrl: './mountains-map.component.html',
  styleUrls: ['./mountains-map.component.scss'],
})
export class MountainsMapComponent implements OnInit {
  @Input() cityCoordinates!: MountainCoordinates;
  @Input() cityMountains!: CityMountains[];
  private map!: L.Map;
  private centroid: L.LatLngExpression = [0, 0];
  private cityMarker = new L.Marker([0, 0]);
  private mountainMarkers: L.Marker[] = [];

  private setMarker(lat: number, long: number) {
    let cityMarkerIcon = L.icon({
      iconUrl: 'https://i.imgur.com/FosaApX.png',
      iconSize: [35, 35],
    });

    this.cityMarker = new L.Marker([lat, long], { icon: cityMarkerIcon });
  }

  private setCityMountainMarkers() {
    let mountainMarkerIcon = L.icon({
      iconUrl: 'https://i.imgur.com/5tQEfWV.png',
      iconSize: [35, 35],
      shadowAnchor: [2, 35],
    });

    this.cityMountains.forEach((mountain) => {
      this.mountainMarkers.push(
        new L.Marker([mountain.coordinates.lat, mountain.coordinates.long], {
          icon: mountainMarkerIcon,
        })
          .bindTooltip(
            `<div class="mountain-tooltip">
               <p>${mountain.name}</p><span>(${mountain.height} m)</span>
            </div>`,
            {
              permanent: true,
              direction: 'bottom',
              className: 'Lasta',
            }
          )
          .on('click', () => {
            window.open(
              `http://localhost:4200/mountain/${mountain.id}`,
              '_self'
            );
          })
      );
    });
  }

  private addCityMountainMarkers() {
    this.mountainMarkers.forEach((marker) => {
      marker.addTo(this.map);
    });
  }

  private drawLineFromCityToMountain() {
    this.cityMountains.forEach((mountain) => {
      L.polyline(
        [
          [this.cityCoordinates.lat as any, this.cityCoordinates.long as any],
          [mountain.coordinates.lat, mountain.coordinates.long],
        ],
        {
          color: '#485123',
          opacity: 0.6,
          weight: 2,
        }
      )
        .on('mouseover', () => {})
        .addTo(this.map);
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 10,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    let featureGroup = L.featureGroup([
      ...this.mountainMarkers,
      this.cityMarker,
    ]);

    this.map.zoomControl.setPosition('bottomleft');
    this.map.fitBounds(featureGroup.getBounds());

    this.cityMarker.addTo(this.map);

    this.addCityMountainMarkers();
    this.drawLineFromCityToMountain();
    tiles.addTo(this.map);
  }

  ngOnInit(): void {
    this.setMarker(this.cityCoordinates.lat, this.cityCoordinates.long);
    this.setCityMountainMarkers();
    this.initMap();
  }
}
