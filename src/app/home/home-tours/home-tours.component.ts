import { Component, OnInit } from '@angular/core';
import { ToursModel } from 'src/app/models/tours.model';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-home-tours',
  templateUrl: './home-tours.component.html',
  styleUrls: ['./home-tours.component.css'],
})
export class HomeToursComponent implements OnInit {
  //.
  toursList: ToursModel[] = [];
  constructor(private tourService: ToursService) {}

  ngOnInit(): void {
    this.toursList = this.tourService.requestTours();
  }
}
