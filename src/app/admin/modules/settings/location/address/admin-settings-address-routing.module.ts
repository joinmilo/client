import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { id } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsAddressFormComponent } from './components/form/admin-settings-address-form.component';
import { AdminSettingsAddressOverviewComponent } from './components/overview/admin-settings-address.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsAddressOverviewComponent,
  },
  {
    path: `:${id}/form`,
    component: AdminSettingsAddressFormComponent,
  },
  {
    path: `form`,
    component: AdminSettingsAddressFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsAddressRoutingModule { }
