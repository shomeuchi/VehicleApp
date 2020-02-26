import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { DataService } from 'src/app/data.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { EditVehiclesComponent } from '../edit-vehicles/edit-vehicles.component';

@Component({
  selector: 'app-details-vehicles',
  templateUrl: './details-vehicles.component.html',
  styleUrls: ['./details-vehicles.component.css']
})
export class DetailsVehiclesComponent implements OnInit {

  vehicle: Vehicle;
  del: boolean=false;
  popUpEdit:boolean;
  constructor(private _vehicleService: VehicleService, private _dataService: DataService) {
  }

  ngOnInit(): void {
    this._dataService.currentDelete.subscribe(d => this.del = d);
    this._dataService.currentVehicle.subscribe((d) => { this.vehicle = d });
    this._dataService.currentEdit.subscribe(d=>this.popUpEdit=d);
  }

  delete(id: string) {

    this._vehicleService.deleteVehicle(this.vehicle).subscribe(
      () => { },
      (error: any) => { console.log('error:' + error) },
      () => {
        console.log('Successfully deleted vehicle from server with id: ' + id),
        this._dataService.changeVehicle(null),
        this._dataService.changeDelete(true)
        this.del=!this.del;
      }
    );
      }
      edit(){
          this._dataService.changeEdit(true);
      }

}
