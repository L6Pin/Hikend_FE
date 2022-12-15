import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CityComponent } from "../city/city.component";
import { CityShellRoutingModule } from "./city-shell.routing.module";

@NgModule({
    declarations: [CityComponent],
    imports: [CommonModule, CityShellRoutingModule]
})

export class CityModule { }