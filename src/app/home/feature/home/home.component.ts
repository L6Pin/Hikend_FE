import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { City } from 'src/app/shared/models/city';
import { HomeService } from '../../data-access/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities$!: Observable<City[]>
  savedCities: City[] = []
  filteredCities: City[] = []
  noSearchResults: boolean = false

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.cities$ = this.homeService.getCities().pipe(
      tap((res) => {
        this.savedCities = res
      })
    )
  }

  filterCities(event: string) {

    this.filteredCities = this.savedCities

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
