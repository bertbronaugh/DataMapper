import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataMapsComponent } from './data-maps/data-maps.component';
import { DataMapComponent } from './data-map/data-map.component';
import { DataMapAddEditComponent } from './data-map-add-edit/data-map-add-edit.component';
import { DataMapService } from './services/data-map.service';

@NgModule({
  declarations: [
    AppComponent,
    DataMapsComponent,
    DataMapComponent,
    DataMapAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
