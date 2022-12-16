import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../data-access/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService, private route: ActivatedRoute) { }

  city: any = {}
  cityMountains: any[] = []

  ngOnInit(): void {
    this.cityService.getSingleCity(this.route.snapshot.params['id']).subscribe(response => {
      this.city = response.data
      this.cityMountains = response.data.mountains
      this.sortMountainsByAlphabeticalOrder()
    })
  }

  sortMountains(event: any) {
    if (event === "1") this.sortMountainsByAlphabeticalOrder();
    if (event === "2") this.sortMountainsByReverseAlphabeticalOrder();
    if (event === "3") this.sortMountainsByClosest();
    if (event === "4") this.sortMountainsByFurthest();
  }

  sortMountainsByAlphabeticalOrder() {

    this.cityMountains = this.cityMountains.sort((a, b) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA > mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByReverseAlphabeticalOrder() {
    this.cityMountains = this.cityMountains.sort((a, b) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA < mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByClosest() {
    this.cityMountains = this.cityMountains.sort((a, b) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA > mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByFurthest() {
    this.cityMountains = this.cityMountains.sort((a, b) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA < mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

}
