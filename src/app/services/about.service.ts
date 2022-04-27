import { Injectable } from '@angular/core';
import { AboutModel } from '../models/about.model';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  //.

  aboutArray: AboutModel[] = [
    new AboutModel(
      'Day Tours',
      `Day Tours are available (every day on most routes) for all of the most popular attractions in Ireland including the Giant’s Causeway,
       Cliffs of Moher, Wicklow Mountains, Kilkenny, Connemara & Galway, County Kerry, Belfast City, Blarney Castle & County Cork.
        Enjoy the highest quality touring vehicles in the industry with wi- fi access as standard. When you climb aboard on the morning of your tour, you will be glad you chose the Paddywagon!`
    ),
    new AboutModel(
      'Multi Day Tours',
      `Multi-day tours allow you to experience the various regions of Ireland easily and in comfort. Departures several times a 
     week also mean that you will likely find something to match your travel plans when time is at a premium.
     You can choose between 2, 3, 4, 5, 6, 9 day durations and also between B&B / Guesthouse or youth hostel accommodations. 
    Time is split between touring, personal exploration time and leisure time in the evenings. 
    Read more about the accommodation options & the various kinds of people who travel with us.`
    ),
  ];

  retrieveAboutArray() {
    return this.aboutArray.slice();
  }

  constructor() {}
}
