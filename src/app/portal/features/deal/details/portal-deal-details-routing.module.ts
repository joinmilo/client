import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalDealDetailsMediaComponent } from './components/media/portal-deal-details-media.component';
import { PortalDealDetailsComponent } from './components/portal-deal-details.component';


const routes: Routes = [
  {
    path: '',
    component: PortalDealDetailsComponent
  },
  {
    path: 'media',
    component: PortalDealDetailsMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalDealDetailsRoutingModule { }
