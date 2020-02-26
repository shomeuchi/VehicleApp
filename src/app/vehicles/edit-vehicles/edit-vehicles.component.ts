import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { DataService } from 'src/app/data.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-vehicles',
  templateUrl: './edit-vehicles.component.html',
  styleUrls: ['./edit-vehicles.component.css']
})
export class EditVehiclesComponent implements OnInit {
  @ViewChild('vehicleForm') public vehicleForm: NgForm;
  vehicle: Vehicle;
 
  constructor(private _vehicleService: VehicleService, private _dataService: DataService) { }
  popup: boolean;
  ngOnInit(): void {
    this._dataService.currentVehicle.subscribe(d=> this.vehicle=d);
    this._dataService.currentEdit.subscribe(d=>this.popup=d);

  }
  cancel() {
    this.popup = !this.popup;
    this._dataService.changeEdit(false);
  }
 editVehicle(){
  this._vehicleService.editVehicle(this.vehicle).subscribe(
    () => { },
    (error: any) => { console.log('error:' + error) },
    () => {  this.popup = !this.popup;this._dataService.changeEdit(false);
    }   
  );
 }
}
