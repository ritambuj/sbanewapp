import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultADoctorPage } from './consult-a-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultADoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultADoctorPageRoutingModule {}
