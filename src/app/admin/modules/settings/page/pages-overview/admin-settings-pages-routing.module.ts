import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsPagesOverviewComponent } from './component/admin-settings-pages-overview.component';
const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPagesOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPagesRoutingModule { }
