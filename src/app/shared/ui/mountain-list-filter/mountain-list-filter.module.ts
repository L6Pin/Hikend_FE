import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MountainListFilterComponent } from './mountain-list-filter.component';

@NgModule({
  declarations: [MountainListFilterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MountainListFilterComponent],
})
export class MountainListFilterModule {}
