import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VehiclesApp';
  constructor(private _dataService: DataService){}

  create(){
    this._dataService.changeCreate(true);
  }
}
