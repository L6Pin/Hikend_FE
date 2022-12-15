import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CityComponent } from "../city/city.component";

const routes: Routes = [
    {path: ":id", component: CityComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CityShellRoutingModule {}