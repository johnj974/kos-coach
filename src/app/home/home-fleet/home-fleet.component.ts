import { Component, OnInit } from '@angular/core';
import { BusModel } from 'src/app/models/bus.model';
import { FleetService } from 'src/app/services/fleet.service';

@Component({
  selector: 'app-home-fleet',
  templateUrl: './home-fleet.component.html',
  styleUrls: ['./home-fleet.component.css'],
})
export class HomeFleetComponent implements OnInit {
  //.
  fleetArray: BusModel[];

  constructor(private fleetService: FleetService) {}

  ngOnInit(): void {
    this.fleetArray = this.fleetService.retrieveFleet();
  }
}
