import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MountainComponent } from "../mountain/mountain.component";

const routes: Routes = [
    {path: ":id", component: MountainComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MountainRoutingModule {}