import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from './models/vehicle.model';


@Injectable()
export class DataService {

    private vehicleSource = new BehaviorSubject<Vehicle>(null);
    currentVehicle = this.vehicleSource;

    private deleteSource=new BehaviorSubject<boolean>(false);
    currentDelete = this.deleteSource;

    private createSource =new BehaviorSubject<boolean>(false);
    currentCreate=this.createSource;

    private editSource =new BehaviorSubject<boolean>(false);
    currentEdit=this.editSource;
    
    private searchSource = new BehaviorSubject<boolean>(false);
    currentSearch=this.searchSource;

    changeSearch(b:boolean){
        this.searchSource.next(b);
    }
    changeEdit(b:boolean){
        this.editSource.next(b);
    }
    changeCreate(b: boolean){
        this.createSource.next(b);
    }
    changeVehicle(vehicle: Vehicle) {
        this.vehicleSource.next(vehicle);
    }
    changeDelete(b: boolean){
        this.deleteSource.next(b);
    }

}