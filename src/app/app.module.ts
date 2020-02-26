import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVehiclesComponent } from './vehicles/list-vehicles/list-vehicles.component';
import { VehicleService } from './vehicles/vehicle.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DetailsVehiclesComponent } from './vehicles/details-vehicles/details-vehicles.component';
import { DataService } from './data.service';
import { CreateVehiclesComponent } from './vehicles/create-vehicles/create-vehicles.component';
import { EditVehiclesComponent } from './vehicles/edit-vehicles/edit-vehicles.component';
import { SearchVehiclesComponent } from './vehicles/search-vehicles/search-vehicles.component';


@NgModule({
  declarations: [
    AppComponent,
    ListVehiclesComponent,
    DetailsVehiclesComponent,
    CreateVehiclesComponent,
    EditVehiclesComponent,
    SearchVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VehicleService,HttpClient,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
