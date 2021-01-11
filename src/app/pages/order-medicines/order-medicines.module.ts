import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderMedicinesPageRoutingModule } from './order-medicines-routing.module';

import { OrderMedicinesPage } from './order-medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderMedicinesPageRoutingModule
  ],
  declarations: [OrderMedicinesPage]
})
export class OrderMedicinesPageModule {}
