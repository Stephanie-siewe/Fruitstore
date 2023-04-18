import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfruitPageRoutingModule } from './addfruit-routing.module';

import { AddfruitPage } from './addfruit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfruitPageRoutingModule
  ],
  declarations: [AddfruitPage]
})
export class AddfruitPageModule {}
