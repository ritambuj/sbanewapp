import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallAnAmbulancePageRoutingModule } from './call-an-ambulance-routing.module';

import { CallAnAmbulancePage } from './call-an-ambulance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallAnAmbulancePageRoutingModule
  ],
  declarations: [CallAnAmbulancePage]
})
export class CallAnAmbulancePageModule {}
