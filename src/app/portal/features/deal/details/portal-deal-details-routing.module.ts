import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalDealDetailsComponent } from './components/portal-deal-details.component';


const routes: Routes = [
  {
    path: '',
    component: PortalDealDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalDealDetailsRoutingModule { }
