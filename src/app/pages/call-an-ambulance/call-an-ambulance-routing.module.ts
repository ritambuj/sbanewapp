import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallAnAmbulancePage } from './call-an-ambulance.page';

const routes: Routes = [
  {
    path: '',
    component: CallAnAmbulancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallAnAmbulancePageRoutingModule {}
