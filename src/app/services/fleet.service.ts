import { Injectable } from '@angular/core';
import { BusModel } from '../models/bus.model';

@Injectable({
  providedIn: 'root',
})
export class FleetService {
  //.

  retrieveFleet() {
    return this.fleetArray.slice();
  }

  fleetArray: BusModel[] = [
    new BusModel('Mercedes', 'Big Bus', 'another-white-bus', 2003),
    new BusModel('Mercedes', 'Big Bus', 'white-bus', 2003),
    new BusModel('Mercedes', 'Big Bus', 'grey-bus', 2003),
  ];
  constructor() {}
}
