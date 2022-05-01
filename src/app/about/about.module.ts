import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { AboutFleetComponent } from './about-fleet/about-fleet.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutMainComponent, AboutIntroComponent, AboutFleetComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
  exports: [AboutIntroComponent],
})
export class AboutModule {}
