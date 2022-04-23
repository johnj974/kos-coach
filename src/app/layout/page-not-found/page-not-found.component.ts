import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  //.
  lostMessage = `It Appears That Your Sat-Nav Is misinformed, Do Not be alarmed, Please
  choose from our existing routes.`;
  message = "We're not lost, I know exactly where we are.";
  pageNotFoundExits = ['Home', 'Services', 'About', 'Contact'];

  toPage(data: string) {
    if (data === 'Home') {
      this.router.navigate(['']);
    } else {
      this.router.navigate([`/${data.toLowerCase()}`]);
    }
  }

  changeMessage(data: string) {
    if (data === 'lost') {
      this.message = 'Okay, I admit it, we are lost';
    } else if (data === 'not-lost') {
      this.message = "We're not lost, I know exactly where we are.";
    }
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
