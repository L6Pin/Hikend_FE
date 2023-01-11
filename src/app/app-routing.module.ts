import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./home/feature/home_shell/home.module").then(m => m.HomeModule) },
  { path: "city", loadChildren: () => import("./city/feature/city_shell/city.module").then(m => m.CityModule) },
  { path: "mountain", loadChildren: () => import("./mountain/feature/mountain_shell/mountain.module").then(m => m.MountainModule) },
  { path: "saved-mountains", loadChildren: () => import("./saved-mountains/feature/saved-mountains-shell/saved-mountains.module").then(m => m.SavedMountainsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
