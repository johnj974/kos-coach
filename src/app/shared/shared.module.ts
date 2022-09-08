import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactComponent } from './shared-contact/shared-contact.component';
import { SplitLastPipe } from './reduceText.pipe';
import { SharedInfoBannerComponent } from './shared-info-banner/shared-info-banner.component';

@NgModule({
  declarations: [
    SharedContactComponent,
    SplitLastPipe,
    SharedInfoBannerComponent,
  ],
  imports: [CommonModule],
  exports: [SharedContactComponent, SplitLastPipe, SharedInfoBannerComponent],
})
export class SharedModule {}
