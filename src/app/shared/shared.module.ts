import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactComponent } from './shared-contact/shared-contact.component';

@NgModule({
  declarations: [SharedContactComponent],
  imports: [CommonModule],
  exports: [SharedContactComponent],
})
export class SharedModule {}
