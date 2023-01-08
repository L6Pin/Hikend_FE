import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SavedMountainsComponent } from "../saved-mountains/saved-mountains.component";

const routes: Routes = [
    { path: "", component: SavedMountainsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SavedMountainsShellRoutingModule { }