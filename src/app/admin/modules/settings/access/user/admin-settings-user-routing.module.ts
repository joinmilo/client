import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsUserComponent } from './component/admin-settings-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsUserRoutingModule { }
