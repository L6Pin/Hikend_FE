import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MountainMapComponent } from "../../ui/mountain-map/mountain-map.component";
import { MountainRouteComponent } from "../../ui/mountain-route/mountain-route.component";
import { MountainComponent } from "../mountain/mountain.component";
import { MountainRoutingModule } from "./mountain.routing.module";

@NgModule({
    declarations: [MountainComponent, MountainMapComponent, MountainRouteComponent],
    imports: [MountainRoutingModule, CommonModule],
    exports: []
})

export class MountainModule{}