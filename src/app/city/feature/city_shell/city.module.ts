import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataTransformComponent } from "../../ui/data-transform/data-transform.component";
import { MountainListItemComponent } from "../../ui/mountain-list-item/mountain-list-item.component";
import { CityComponent } from "../city/city.component";
import { CityShellRoutingModule } from "./city-shell.routing.module";

@NgModule({
    declarations: [CityComponent, MountainListItemComponent, DataTransformComponent],
    imports: [CommonModule, CityShellRoutingModule]
})

export class CityModule { }