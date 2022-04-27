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
      'image '
    ),
    new ToursModel(
      'Cliffs of Moher ',
      'A day excursion around the cliffs of moher',
      'a day excursion around the cliffs of moher',
      70,
      'image '
    ),
  ];

  requestTours() {
    return this.toursArray.slice();
  }

  constructor() {}
}
