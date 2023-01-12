import { Component, Input } from '@angular/core';
import { MountainRoutes } from 'src/app/shared/models/mountain';

@Component({
  selector: 'app-mountain-route',
  templateUrl: './mountain-route.component.html',
  styleUrls: ['./mountain-route.component.scss'],
})
export class MountainRouteComponent {
  @Input() hikingRoute!: MountainRoutes;
}
