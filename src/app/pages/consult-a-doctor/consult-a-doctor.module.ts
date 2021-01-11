import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultADoctorPageRoutingModule } from './consult-a-doctor-routing.module';

import { ConsultADoctorPage } from './consult-a-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultADoctorPageRoutingModule
  ],
  declarations: [ConsultADoctorPage]
})
export class ConsultADoctorPageModule {}
