import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeachPageRoutingModule } from './peach-routing.module';

import { PeachPage } from './peach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeachPageRoutingModule
  ],
  declarations: [PeachPage]
})
export class PeachPageModule {}
