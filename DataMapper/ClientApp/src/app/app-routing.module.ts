import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataMapsComponent } from './data-maps/data-maps.component';
import { DataMapComponent } from './data-map/data-map.component';
import { DataMapAddEditComponent } from './data-map-add-edit/data-map-add-edit.component';

const routes: Routes = [
  { path: '', component: DataMapsComponent, pathMatch: 'full'},
  { path: 'datamap/:id', component: DataMapComponent },
  { path: 'add', component: DataMapAddEditComponent },
  { path: 'datamap/edit/:id', component: DataMapAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
