import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MountainListItemComponent } from "./mountain-list-item.component";

@NgModule({
    declarations: [MountainListItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [MountainListItemComponent]
})

export class MountainListItemModule {}