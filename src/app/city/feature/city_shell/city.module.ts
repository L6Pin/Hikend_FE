import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoaderModule } from "src/app/shared/ui/loader/loader.module";
import { MountainListFilterModule } from "src/app/shared/ui/mountain-list-filter/mountain-list-filter.module";
import { MountainListItemModule } from "src/app/shared/ui/mountain-list-item/mountain-list-item.module";

import { CityComponent } from "../city/city.component";
import { CityShellRoutingModule } from "./city-shell.routing.module";

@NgModule({
    declarations: [CityComponent],
    imports: [CommonModule, CityShellRoutingModule, LoaderModule, MountainListItemModule, MountainListFilterModule],
})

export class CityModule { }