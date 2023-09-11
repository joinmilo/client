import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsAddressComponent } from './component/admin-settings-address.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsAddressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsAddressRoutingModule { }
