import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsRoleComponent } from './component/admin-settings-role.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsRoleRoutingModule { }
