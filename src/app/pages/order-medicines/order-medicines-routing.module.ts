import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderMedicinesPage } from './order-medicines.page';

const routes: Routes = [
  {
    path: '',
    component: OrderMedicinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderMedicinesPageRoutingModule {}
