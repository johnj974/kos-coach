import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  //.
  message = "We're not lost, I know exactly where we are.";
  pageNotFoundExits = ['Home', 'Services', 'About', 'Contact'];

  toHomePage() {
    this.router.navigate(['']);
  }

  toServicePage() {
    this.router.navigate(['/services']);
  }

  toAboutPage() {
    this.router.navigate(['/about']);
  }

  toContactPage() {
    this.router.navigate(['/contact']);
  }

  changeMessage() {
    this.message = 'Okay, I admit it, we are lost';
    console.log('working');
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
