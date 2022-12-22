import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderModule } from "src/app/shared/ui/loader/loader.module";
import { MountainMapComponent } from "../../ui/mountain-map/mountain-map.component";
import { MountainRouteComponent } from "../../ui/mountain-route/mountain-route.component";
import { MountainComponent } from "../mountain/mountain.component";
import { MountainRoutingModule } from "./mountain.routing.module";

@NgModule({
    declarations: [MountainComponent, MountainMapComponent, MountainRouteComponent],
    imports: [MountainRoutingModule, CommonModule, LoaderModule],
    exports: []
})

export class MountainModule{}