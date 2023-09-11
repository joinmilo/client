import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsSuburbComponent } from './component/admin-settings-suburb.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsSuburbComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsSuburbRoutingModule { }
