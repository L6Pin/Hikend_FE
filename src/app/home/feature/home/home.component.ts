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
  noSearchResults: boolean = false

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {

  }

  test(event: any) {

    console.log(event.toLowerCase())

    this.homeService.getCities().subscribe(res => {
      this.cities = res.data
      this.noSearchResults = false


      if (event === "") {
        this.cities = []
      }
      else {
        this.cities = this.cities.filter(city => city.name.toLowerCase().includes(event.toLowerCase()))
        if (this.cities.length === 0) {
          console.warn("No search results");
          this.noSearchResults = true
        }
      }
    })

  }

}
