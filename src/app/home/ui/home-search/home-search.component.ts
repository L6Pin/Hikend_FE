import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent  {

  @Output() searchInputUpdate = new EventEmitter<string>()
  @Input() cities: any = []

  searchInput: string = ""

  checkCitiesLength(){
    return this.cities.length > 0
  }

  searchInputChanged(){
    this.searchInputUpdate.emit(this.searchInput)
  }
}
