import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalUserSettingsComponent } from './components/portal-user-settings.component';

const routes: Routes = [
  {
    path: '',
    component: PortalUserSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalUserSettingsRoutingModule {}
