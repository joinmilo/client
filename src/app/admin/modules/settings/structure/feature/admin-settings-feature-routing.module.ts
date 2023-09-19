import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsFeatureComponent } from './component/admin-settings-feature.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsFeatureRoutingModule { }
