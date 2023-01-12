import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountain-list-filter',
  templateUrl: './mountain-list-filter.component.html',
  styleUrls: ['./mountain-list-filter.component.scss'],
})
export class MountainListFilterComponent {
  constructor(private router: Router) {}

  @Output() selectedSortValueUpdated = new EventEmitter<string>();
  @Output() mountainSearchInputUpdated = new EventEmitter<string>();

  selectedSortValue: string = 'Alphabetical-Ascending';
  mountainSearchInput: string = '';
  currentRoute: string = this.router.url;

  selectedSortValueChanged() {
    this.selectedSortValueUpdated.emit(this.selectedSortValue);
  }

  mountainSearchInputChanged() {
    this.mountainSearchInputUpdated.emit(this.mountainSearchInput);
  }
}
