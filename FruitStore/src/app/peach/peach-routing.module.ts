import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeachPage } from './peach.page';

const routes: Routes = [
  {
    path: '',
    component: PeachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeachPageRoutingModule {}
