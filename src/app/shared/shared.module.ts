import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactComponent } from './shared-contact/shared-contact.component';
import { SplitLastPipe } from './reduceText.pipe';
import { SharedInfoBannerComponent } from './shared-info-banner/shared-info-banner.component';
import { SharedBannerComponent } from './shared-banner/shared-banner.component';

@NgModule({
  declarations: [
    SharedContactComponent,
    SplitLastPipe,
    SharedInfoBannerComponent,
    SharedBannerComponent,
  ],
  imports: [CommonModule],
  exports: [
    SharedContactComponent,
    SplitLastPipe,
    SharedInfoBannerComponent,
    SharedBannerComponent,
  ],
})
export class SharedModule {}
