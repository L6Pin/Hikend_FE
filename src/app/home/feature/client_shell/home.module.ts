import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeShellRoutingModule } from './home-shell.routing.module';
import { HomeSearchComponent } from '../../ui/home-search/home-search.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    HomeSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeShellRoutingModule,
  ]
})
export class HomeModule { }
