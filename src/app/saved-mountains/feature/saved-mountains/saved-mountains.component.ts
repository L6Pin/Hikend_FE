import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CityMountains } from 'src/app/shared/models/city';
import { MountainListFilterService } from 'src/app/shared/utils/mountain-list-filter/mountain-list-filter.service';
import { MountainListSortService } from 'src/app/shared/utils/mountain-list-sort/mountain-list-sort.service';
import { SavedMountainsService } from '../../data-access/saved-mountains.service';

@Component({
  selector: 'app-saved-mountains',
  templateUrl: './saved-mountains.component.html',
  styleUrls: ['./saved-mountains.component.scss']
})
export class SavedMountainsComponent implements OnInit {

  constructor(private savedMountainsService: SavedMountainsService, private mountainListSort: MountainListSortService, private mountainListFilter: MountainListFilterService) { }

  mountains$!: Observable<CityMountains[]>
  savedMountains: CityMountains[] = []
  savedMountainsListChanged: CityMountains[] = []
  noSearchResults: boolean = false;
  selectedSortValue: string = "Alphabetical-Ascending";

  ngOnInit(): void {
    this.mountains$ = this.savedMountainsService.getSavedMountains().pipe(
      tap((res)=> {
        this.savedMountains = res
        this.savedMountainsListChanged = this.savedMountains
        this.mountainListSort.sortMountainsByAlphabeticalOrder(this.savedMountainsListChanged)
      })
    )
  }

  onUserSelectsortMountains(selectedSort: string) {
    this.savedMountainsListChanged = this.mountainListSort.sortMountains(selectedSort, this.savedMountains)
  }

  onUserInputfilterMountains(userInput: string) {
    this.savedMountainsListChanged = this.mountainListFilter.filterMountains(userInput, this.savedMountains).cityMountainsListChanged
    this.noSearchResults = this.mountainListFilter.filterMountains(userInput, this.savedMountains).noSearchResults
  }

}
