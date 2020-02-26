import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { DataService } from 'src/app/data.service';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.css']
})
export class SearchVehiclesComponent implements OnInit {

  @ViewChild('searchForm') public searchForm: NgForm;
  searchText: string;
  filteredVehicles: Vehicle[];
  numOfRes: boolean;
  show: boolean = false;
  vehicle: Vehicle;

  constructor(private _vehicleService: VehicleService, private _dataService: DataService) {
    this._dataService.currentSearch.subscribe(d => this.numOfRes = d);
    this._vehicleService.getVehicleBySearchString(this.searchText).subscribe((d) => { this.filteredVehicles = d });
  }

  ngOnInit(): void {
    this._dataService.currentSearch.subscribe(d => this.numOfRes = d);
  }
  details(id :string){
    this._vehicleService.getVehicle(id).subscribe(
      (d)=> {this.vehicle=d},
      (error)=>{},
      ()=>{this._dataService.changeVehicle(this.vehicle)});
    
  }
  searchVehicle() {
    this.show = true;
    this._vehicleService.getVehicleBySearchString(this.searchText).subscribe((d) => { this.filteredVehicles = d },
      (error) => { },
      () => {
        if(this.filteredVehicles.length != 1){
          this._dataService.changeSearch(true);
          this.numOfRes = true;
          console.log('More than one search result.');
        }
        if(this.filteredVehicles.length == 1){
          this._dataService.changeVehicle(this.filteredVehicles[0]);
          this.numOfRes = false;
          this.show = false;
          console.log('Only one search result.' );
        }
      });

  }

}

