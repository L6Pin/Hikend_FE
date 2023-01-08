import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mountain-list-filter',
  templateUrl: './mountain-list-filter.component.html',
  styleUrls: ['./mountain-list-filter.component.scss']
})
export class MountainListFilterComponent {
  @Output() selectedSortValueUpdated = new EventEmitter<string>();
  @Output() mountainSearchInputUpdated = new EventEmitter<string>();

  selectedSortValue: string = "Alphabetical-Ascending";
  mountainSearchInput: string = "";

  selectedSortValueChanged() {
    this.selectedSortValueUpdated.emit(this.selectedSortValue)
  }

  mountainSearchInputChanged() {
    this.mountainSearchInputUpdated.emit(this.mountainSearchInput)
  }
}
