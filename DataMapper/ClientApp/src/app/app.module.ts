import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataMapsComponent } from './data-maps/data-maps.component';
import { DataMapComponent } from './data-map/data-map.component';
import { DataMapAddEditComponent } from './data-map-add-edit/data-map-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DataMapsComponent,
    DataMapComponent,
    DataMapAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
