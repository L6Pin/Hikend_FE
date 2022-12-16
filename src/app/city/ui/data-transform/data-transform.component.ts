import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-transform',
  templateUrl: './data-transform.component.html',
  styleUrls: ['./data-transform.component.scss']
})
export class DataTransformComponent {

  @Output() selectedSortValueUpdated = new EventEmitter<number>();
  @Output() mountainSearchInputUpdated = new EventEmitter<string>();

  selectedSortValue: number = 1;
  mountainSearchInput: string = "";

  selectedSortValueChanged() {
    this.selectedSortValueUpdated.emit(this.selectedSortValue)
  }

  mountainSearchInputChanged() {
    this.mountainSearchInputUpdated.emit(this.mountainSearchInput)
  }
}
