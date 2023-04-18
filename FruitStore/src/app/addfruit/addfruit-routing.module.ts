import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfruitPage } from './addfruit.page';

const routes: Routes = [
  {
    path: '',
    component: AddfruitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfruitPageRoutingModule {}
