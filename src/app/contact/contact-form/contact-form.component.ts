import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  //.
  contactForm: FormGroup;

  submitForm() {
    console.log(this.contactForm);

    setTimeout(() => {
      this.contactForm.reset();
    }, 5000);
  }
  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      service: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }
}
