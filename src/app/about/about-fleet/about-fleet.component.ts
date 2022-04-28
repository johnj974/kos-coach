import { Component, OnInit } from '@angular/core';
import { BusModel } from 'src/app/models/bus.model';
import { FleetService } from 'src/app/services/fleet.service';

@Component({
  selector: 'app-about-fleet',
  templateUrl: './about-fleet.component.html',
  styleUrls: ['./about-fleet.component.css'],
})
export class AboutFleetComponent implements OnInit {
  //.
  fleetList: BusModel[] = [];

  constructor(private fleetService: FleetService) {}

  ngOnInit(): void {
    this.fleetList = this.fleetService.retrieveFleet();
  }
}
