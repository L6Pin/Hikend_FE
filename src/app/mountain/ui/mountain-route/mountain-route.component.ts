import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mountain-route',
  templateUrl: './mountain-route.component.html',
  styleUrls: ['./mountain-route.component.scss']
})
export class MountainRouteComponent {

  @Input() hikingRoute:any = {}

}
