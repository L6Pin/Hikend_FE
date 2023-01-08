import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderModule } from "src/app/shared/ui/loader/loader.module";
import { MountainListFilterModule } from "src/app/shared/ui/mountain-list-filter/mountain-list-filter.module";
import { MountainListItemModule } from "src/app/shared/ui/mountain-list-item/mountain-list-item.module";
import { SavedMountainsComponent } from "../saved-mountains/saved-mountains.component";
import { SavedMountainsShellRoutingModule } from "./saved-mountains-shell.routing.module";

@NgModule({
    declarations: [SavedMountainsComponent],
    imports: [CommonModule, SavedMountainsShellRoutingModule, MountainListFilterModule, MountainListItemModule,LoaderModule]
})

export class SavedMountainsModule { }