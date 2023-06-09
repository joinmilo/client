import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalBecomeContentCreatorComponent } from './components/portal-become-content-creator.component';

const routes: Routes = [
  {
    path: '',
    component: PortalBecomeContentCreatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalBecomeContentCreatorRoutingModule {}
