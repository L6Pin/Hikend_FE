import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeService } from '../../data-access/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  cities: any[] = []
  filteredCities: any[] = []
  noSearchResults: boolean = false

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {

    this.homeService.getCities().subscribe(res => {
      this.cities = res.data
    })
  }

  test(event: any) {
    
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
