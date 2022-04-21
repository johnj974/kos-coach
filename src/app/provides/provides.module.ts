import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidesRoutingModule } from './provides-routing.module';
import { ProvidesMainComponent } from './provides-main/provides-main.component';


@NgModule({
  declarations: [
    ProvidesMainComponent
  ],
  imports: [
    CommonModule,
    ProvidesRoutingModule
  ]
})
export class ProvidesModule { }
