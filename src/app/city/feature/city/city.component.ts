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
  cityMountainsFiltered: any[] = []
  noSearchResults: boolean = false;
  selectedSortValue: number = 1;

  ngOnInit(): void {
    this.cityService.getSingleCity(this.route.snapshot.params['id']).subscribe(response => {
      this.city = response.data
      this.cityMountains = response.data.mountains;
      this.cityMountainsFiltered = response.data.mountains
      this.sortMountainsByAlphabeticalOrder()
    })

  }

  sortMountains(event: any) {
    if (event === "1") this.sortMountainsByAlphabeticalOrder();
    if (event === "2") this.sortMountainsByReverseAlphabeticalOrder();
    if (event === "3") this.sortMountainsByClosest();
    if (event === "4") this.sortMountainsByFurthest();
    this.selectedSortValue = event
    console.log("sortMountains fired")
  }

  sortMountainsByAlphabeticalOrder() {
    this.cityMountainsFiltered = this.cityMountainsFiltered.sort((a, b) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA > mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByReverseAlphabeticalOrder() {
    this.cityMountainsFiltered = this.cityMountainsFiltered.sort((a, b) => {
      const mountainNameA = a.name.toLowerCase();
      const mountainNameB = b.name.toLowerCase();
      if (mountainNameA < mountainNameB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByClosest() {
    this.cityMountainsFiltered = this.cityMountainsFiltered.sort((a, b) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA > mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  sortMountainsByFurthest() {
    this.cityMountainsFiltered = this.cityMountainsFiltered.sort((a, b) => {
      const mountainDistanceA = a.distance
      const mountainDistanceB = b.distance
      if (mountainDistanceA < mountainDistanceB) {
        return 1
      }
      else return -1
    })
  }

  filterMountains(event: any) {
    this.cityMountainsFiltered = this.cityMountains


    if (event === "") {
      this.cityMountainsFiltered = this.cityMountains
      this.noSearchResults = false
    }
    else {
      this.cityMountainsFiltered = this.cityMountainsFiltered.filter(mountain => mountain.name.toLowerCase().includes(event.toLowerCase()))
      this.noSearchResults = false
      if (this.cityMountainsFiltered.length === 0) {
        console.warn("No search results");
        this.noSearchResults = true
      }
    }

    this.sortMountains(this.selectedSortValue)
  }



}
