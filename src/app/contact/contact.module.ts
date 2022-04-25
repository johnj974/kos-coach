import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactMainComponent,
    ContactFormComponent,
    ContactInfoComponent,
  ],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule],
})
export class ContactModule {}
