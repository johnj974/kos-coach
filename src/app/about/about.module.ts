import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { AboutFleetComponent } from './about-fleet/about-fleet.component';


@NgModule({
  declarations: [
    AboutMainComponent,
    AboutIntroComponent,
    AboutFleetComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
