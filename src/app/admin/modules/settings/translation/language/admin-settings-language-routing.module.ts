import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsLanguageComponent } from './component/admin-settings-language.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingsLanguageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsLanguageRoutingModule { }
