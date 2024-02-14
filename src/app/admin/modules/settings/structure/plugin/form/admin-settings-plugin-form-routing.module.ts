import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsPluginFormComponent } from './component/admin-settings-plugin-form.component';


const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPluginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPluginFormRoutingModule { }
