import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CityMountains } from 'src/app/shared/models/city';
import { SavedMountainsService } from '../../data-access/saved-mountains.service';
import {
  sortMountains,
  sortMountainsByAlphabeticalOrder,
} from 'src/app/shared/utils/mountain-list-sort.utils';
import { filterMountains } from 'src/app/shared/utils/mountain-list-filter.utils';

@Component({
  selector: 'app-saved-mountains',
  templateUrl: './saved-mountains.component.html',
  styleUrls: ['./saved-mountains.component.scss'],
})
export class SavedMountainsComponent implements OnInit {
  constructor(private savedMountainsService: SavedMountainsService) {}

  mountains$!: Observable<CityMountains[]>;
  savedMountains: CityMountains[] = [];
  savedMountainsListChanged: CityMountains[] = [];
  noSearchResults: boolean = false;
  selectedSortValue: string = 'Alphabetical-Ascending';

  ngOnInit(): void {
    this.mountains$ = this.savedMountainsService.getSavedMountains().pipe(
      tap((res) => {
        this.savedMountains = res;
        this.savedMountainsListChanged = this.savedMountains;
        sortMountainsByAlphabeticalOrder(this.savedMountainsListChanged);
      })
    );
  }

  onUserSelectsortMountains(selectedSort: string) {
    this.savedMountainsListChanged = sortMountains(
      selectedSort,
      this.savedMountains
    );
  }

  onUserInputfilterMountains(userInput: string) {
    this.savedMountainsListChanged = filterMountains(
      userInput,
      this.savedMountains
    ).cityMountainsListChanged;
    this.noSearchResults = filterMountains(
      userInput,
      this.savedMountains
    ).noSearchResults;
  }
}
