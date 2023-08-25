import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSettingsComponent } from './components/portal-settings.component';


const routes: Routes = [
  {
    path: '',
    component: PortalSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalSettingsRoutingModule { }
