import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CityService } from '../../data-access/city.service';
import { citySort } from '../../utils/city-sort.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService, private route: ActivatedRoute, private citySort: citySort) { }

  city!: Observable<any>
  cityMountains: any[] = []
  cityMountainsFiltered: any[] = []
  noSearchResults: boolean = false;
  selectedSortValue: string = "Alphabetical-Ascending";

  ngOnInit(): void {
    this.city = this.cityService.getSingleCity(this.route.snapshot.params['id']).pipe(map((response) => {
      this.cityMountains = response.data.mountains;
      this.cityMountainsFiltered = this.cityMountains
      this.citySort.sortMountainsByAlphabeticalOrder(this.cityMountainsFiltered)
      return response;
    }))
  }

  sortMountains(selectedSort: any) {
    if (selectedSort == "Alphabetical-Ascending") this.citySort.sortMountainsByAlphabeticalOrder(this.cityMountainsFiltered)
    if (selectedSort == "Alphabetical-Descending") this.citySort.sortMountainsByReverseAlphabeticalOrder(this.cityMountainsFiltered);
    if (selectedSort == "Closest") this.citySort.sortMountainsByClosest(this.cityMountainsFiltered);
    if (selectedSort == "Furtest") this.citySort.sortMountainsByFurthest(this.cityMountainsFiltered);
  }

  filterMountains(userInput: any) {
    this.cityMountainsFiltered = this.cityMountains

    if (userInput === "") {
      this.noSearchResults = false
    }
    else {
      this.cityMountainsFiltered = this.cityMountainsFiltered.filter(mountain => mountain.name.toLowerCase().includes(userInput.toLowerCase()))
      this.noSearchResults = false
      if (this.cityMountainsFiltered.length === 0) {
        this.noSearchResults = true
      }
    }

    this.sortMountains(this.selectedSortValue)
  }



}
