import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';

import { HomeToursComponent } from './home-tours/home-tours.component';
import { HomeGolfComponent } from './home-golf/home-golf.component';

import { AboutModule } from '../about/about.module';
import { SharedModule } from '../shared/shared.module';
import { HomeFleetComponent } from './home-fleet/home-fleet.component';

@NgModule({
  declarations: [HomeHomeComponent, HomeToursComponent, HomeGolfComponent, HomeFleetComponent],
  imports: [CommonModule, HomeRoutingModule, AboutModule, SharedModule],
})
export class HomeModule {}
