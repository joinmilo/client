import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsPluginDialogComponent } from './component/admin-settings-plugin-dialog.component';


const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPluginDialogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPluginDialogRoutingModule { }
