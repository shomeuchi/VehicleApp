import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent implements OnInit {

  @ViewChild('vehicleForm') public vehicleForm: NgForm;
  vehicle: Vehicle = {
    id: null,
    unitName: null,
    carInfo: null,
    active: null,
    registrationNumber: null,
    numberOfTours: null
  };
  constructor(private _dataService: DataService, private _vehicleService: VehicleService) { }

  popup: boolean;

  ngOnInit(): void {
    this._dataService.currentCreate.subscribe(d => this.popup = d);
  }

  cancel() {
    this.popup = !this.popup;
    this._dataService.changeCreate(false);
  }

  createVehicle() {
    this._vehicleService.saveVehicle(this.vehicle).subscribe(
      (data) => { this.vehicle = data },
      (error) => { console.log(error) },
      () => {
        this.vehicleForm.reset();
        this.popup = !this.popup;

      }
    );
  }

}
