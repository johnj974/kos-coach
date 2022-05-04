import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactComponent } from './shared-contact/shared-contact.component';
import { SplitLastPipe } from './reduceText.pipe';

@NgModule({
  declarations: [SharedContactComponent, SplitLastPipe],
  imports: [CommonModule],
  exports: [SharedContactComponent, SplitLastPipe],
})
export class SharedModule {}
