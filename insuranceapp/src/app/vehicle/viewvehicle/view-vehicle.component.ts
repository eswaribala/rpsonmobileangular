import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {
  @Input('EngineNumber')
  private vehicleEngineNo:string;
  @Input('Make')
  private vehicleMake:string;


  constructor() {


  }

  ngOnInit() {

    console.log(this.vehicleEngineNo);
    console.log(this.vehicleMake);
  }




}
