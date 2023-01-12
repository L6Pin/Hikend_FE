import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CityService } from '../../data-access/city.service';
import { City, CityMountains } from 'src/app/shared/models/city';
import {
  sortMountains,
  sortMountainsByAlphabeticalOrder,
} from 'src/app/shared/utils/mountain-list-sort.utils';
import { filterMountains } from 'src/app/shared/utils/mountain-list-filter.utils';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
  ) {}

  city$!: Observable<City>;
  cityMountains: CityMountains[] = [];
  cityMountainsListChanged: CityMountains[] = [];
  noSearchResults: boolean = false;
  selectedSortValue: string = 'Alphabetical-Ascending';

  ngOnInit(): void {
    this.city$ = this.cityService
      .getSingleCity(this.route.snapshot.params['id'])
      .pipe(
        tap((response) => {
          this.cityMountains = response.mountains;
          this.cityMountainsListChanged = this.cityMountains;
          sortMountainsByAlphabeticalOrder(this.cityMountainsListChanged);
        })
      );
  }

  onUserSelectsortMountains(selectedSort: string) {
    this.cityMountainsListChanged = sortMountains(
      selectedSort,
      this.cityMountainsListChanged
    );
  }

  onUserInputfilterMountains(userInput: string) {
    this.cityMountainsListChanged = filterMountains(
      userInput,
      this.cityMountains
    ).cityMountainsListChanged;
    this.noSearchResults = filterMountains(
      userInput,
      this.cityMountains
    ).noSearchResults;
  }
}
