import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsPageFormComponent } from './component/admin-settings-page-form.component';
const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPageFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPageFormRoutingModule { }
