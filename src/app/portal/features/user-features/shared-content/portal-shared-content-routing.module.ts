import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSharedContentComponent } from './components/portal-shared-content.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSharedContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalSharedContentRoutingModule {}
