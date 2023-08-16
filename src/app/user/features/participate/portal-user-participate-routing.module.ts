import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalParticipateComponent } from './components/portal-participate.component';

const routes: Routes = [
  {
    path: '',
    component: PortalParticipateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalParticipateRoutingModule { }
