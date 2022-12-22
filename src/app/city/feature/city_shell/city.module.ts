import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoaderModule } from "src/app/shared/ui/loader/loader.module";
import { DataTransformComponent } from "../../ui/data-transform/data-transform.component";
import { MountainListItemComponent } from "../../ui/mountain-list-item/mountain-list-item.component";
import { citySort } from "../../utils/city-sort.service";
import { CityComponent } from "../city/city.component";
import { CityShellRoutingModule } from "./city-shell.routing.module";

@NgModule({
    declarations: [CityComponent, MountainListItemComponent, DataTransformComponent],
    imports: [CommonModule, CityShellRoutingModule, FormsModule, LoaderModule],
    providers: [citySort]
})

export class CityModule { }