import { Injectable } from '@angular/core';
import { ToursModel } from '../models/tours.model';

@Injectable({
  providedIn: 'root',
})
export class ToursService {
  //.

  toursArray: ToursModel[] = [
    new ToursModel(
      'Ring Of Kerry',
      'A day excursion around the ring of kerry',
      'a day excursion around the ring of kerry',
      100,
      'explore2'
    ),
    new ToursModel(
      'Cliffs of Moher ',
      'A day excursion around the cliffs of moher',
      'a day excursion around the cliffs of moher',
      70,
      'coast'
    ),
    new ToursModel(
      'Slea Head ',
      'A day excursion around the Slea Head',
      'a day excursion around the Slea Head',
      70,
      'church'
    ),
  ];

  requestTours() {
    return this.toursArray.slice();
  }

  constructor() {}
}
