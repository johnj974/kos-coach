import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidesMainComponent } from './provides-main/provides-main.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidesMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidesRoutingModule {}
