import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-transform',
  templateUrl: './data-transform.component.html',
  styleUrls: ['./data-transform.component.scss']
})
export class DataTransformComponent {

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
