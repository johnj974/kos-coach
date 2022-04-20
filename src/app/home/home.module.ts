import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeToursComponent } from './home-tours/home-tours.component';
import { HomeGolfComponent } from './home-golf/home-golf.component';
import { FleetComponent } from './fleet/fleet.component';


@NgModule({
  declarations: [
    HomeHomeComponent,
    HomeAboutComponent,
    HomeToursComponent,
    HomeGolfComponent,
    FleetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
