import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  //.

  toContactPage() {
    console.log('working');
    this.router.navigate(['/contact']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
