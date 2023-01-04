import { NgModule } from "@angular/core";
import { SavedComponent } from "../saved/saved.component";
import { SavedShellRoutingModule } from "./saved-shell.routing.module";

@NgModule({
    declarations: [SavedComponent],
    imports: [SavedShellRoutingModule]
})

export class SavedModule {}