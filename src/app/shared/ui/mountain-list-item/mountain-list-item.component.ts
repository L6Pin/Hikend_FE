import { Component, Input } from '@angular/core';
import { CityMountains } from '../../models/city';

@Component({
  selector: 'app-mountain-list-item',
  templateUrl: './mountain-list-item.component.html',
  styleUrls: ['./mountain-list-item.component.scss'],
})
export class MountainListItemComponent {
  @Input() cityMountins: CityMountains[] = [];
  @Input() noSearchResults: boolean = false;
}
