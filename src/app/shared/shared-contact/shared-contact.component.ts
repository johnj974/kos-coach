import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-contact',
  templateUrl: './shared-contact.component.html',
  styleUrls: ['./shared-contact.component.css'],
})
export class SharedContactComponent implements OnInit {
  //.

  toContact() {
    this.router.navigate(['contact']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
