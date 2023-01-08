import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MountainListFilterService } from 'src/app/shared/utils/mountain-list-filter/mountain-list-filter.service';
import { MountainListSortService } from 'src/app/shared/utils/mountain-list-sort/mountain-list-sort.service';
import { CityService } from '../../data-access/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService, private route: ActivatedRoute, private mountainListSort: MountainListSortService, private mountainListFilter: MountainListFilterService) { }

  city!: Observable<any>
  cityMountains: any[] = []
  cityMountainsListChanged: any[] = []
  noSearchResults: boolean = false;
  selectedSortValue: string = "Alphabetical-Ascending";

  ngOnInit(): void {
    this.city = this.cityService.getSingleCity(this.route.snapshot.params['id']).pipe(tap((response) => {
      this.cityMountains = response.data.mountains;
      this.cityMountainsListChanged = this.cityMountains
      this.mountainListSort.sortMountainsByAlphabeticalOrder(this.cityMountainsListChanged)
    }))
  }

  sortMountains(selectedSort: any) {
    this.cityMountainsListChanged = this.mountainListSort.sortMountains(selectedSort, this.cityMountainsListChanged)
  }

  filterMountains(userInput: any) {
    this.cityMountainsListChanged = this.mountainListFilter.filterMountains(userInput, this.cityMountains).cityMountainsListChanged
    this.noSearchResults = this.mountainListFilter.filterMountains(userInput, this.cityMountains).noSearchResults
  }
}
