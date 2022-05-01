import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidesRoutingModule } from './provides-routing.module';
import { ProvidesMainComponent } from './provides-main/provides-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProvidesMainComponent],
  imports: [CommonModule, ProvidesRoutingModule, SharedModule],
})
export class ProvidesModule {}
