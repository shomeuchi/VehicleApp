import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
//import 'rxjs/add/observable/of';

@Injectable()
export class VehicleService {


    constructor(private _httpClient: HttpClient, private _router: Router) {

    }

    getVehicles(): Observable<Vehicle[]> {
        return this._httpClient.get<Vehicle[]>('https://localhost:44361/api/vehicles');
    }
    getVehicle(id: string): Observable<Vehicle> {
        return this._httpClient.get<Vehicle>('https://localhost:44361/api/vehicles/' + id);
    }
    getVehicleBySearchString(id: string): Observable<Vehicle[]> {
        return this._httpClient.get<Vehicle[]>('https://localhost:44361/api/Vehicles?searchText=' + id);
    }

    saveVehicle(vehicle: Vehicle): Observable<Vehicle> {
        vehicle.id='';        
        return this._httpClient.post<Vehicle>('https://localhost:44361/api/vehicles',
            vehicle, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });

    }
    editVehicle(vehicle: Vehicle): Observable<Vehicle> {
        return this._httpClient.put<Vehicle>('https://localhost:44361/api/vehicles/' + vehicle.id, vehicle, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }
    deleteVehicle(vehicle: Vehicle) {
        return this._httpClient.delete<void>('https://localhost:44361/api/vehicles/' + vehicle.id);

    }
}







