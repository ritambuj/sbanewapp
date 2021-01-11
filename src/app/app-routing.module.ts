import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  {
    path: 'upload-prescription',
    loadChildren: () => import('./pages/upload-prescription/upload-prescription.module').then( m => m.UploadPrescriptionPageModule)
  },  {
    path: 'call-an-ambulance',
    loadChildren: () => import('./pages/call-an-ambulance/call-an-ambulance.module').then( m => m.CallAnAmbulancePageModule)
  },
  {
    path: 'consult-a-doctor',
    loadChildren: () => import('./pages/consult-a-doctor/consult-a-doctor.module').then( m => m.ConsultADoctorPageModule)
  },
  {
    path: 'lab-test',
    loadChildren: () => import('./pages/lab-test/lab-test.module').then( m => m.LabTestPageModule)
  },
  {
    path: 'order-medicines',
    loadChildren: () => import('./pages/order-medicines/order-medicines.module').then( m => m.OrderMedicinesPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
