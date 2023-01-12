import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from 'src/app/shared/models/city';
import { HomeService } from '../../data-access/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  cities: City[] = []
  filteredCities: City[] = []
  noSearchResults: boolean = false

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {


    this.homeService.getCities().subscribe(res => {
      this.cities = res
    })
  }

  filterCities(event: string) {

    this.filteredCities = this.cities

    if (event === "") {
      this.filteredCities = []
      this.noSearchResults = false
    }
    else {
      this.filteredCities = this.filteredCities.filter(city => city.name.toLowerCase().includes(event.toLowerCase()))
      this.noSearchResults = false
      if (this.filteredCities.length === 0) {
        console.warn("No search results");
        this.noSearchResults = true
      }
    }
  }
}
