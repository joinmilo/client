import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsPluginOverviewComponent } from './components/overview/admin-settings-plugin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPluginOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPluginRoutingModule { }
