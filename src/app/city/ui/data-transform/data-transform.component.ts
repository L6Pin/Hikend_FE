import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-transform',
  templateUrl: './data-transform.component.html',
  styleUrls: ['./data-transform.component.scss']
})
export class DataTransformComponent {

  @Output() selectedSortValueUpdated = new EventEmitter<number>()
  selectedSortValue: number = 1


  selectedSortValueChanged() {
    console.log(this.selectedSortValue)
    this.selectedSortValueUpdated.emit(this.selectedSortValue)
  }
}
