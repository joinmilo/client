import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalMapOverviewComponent } from './components/portal-map-overview.component';

const routes = [
  {
    path: '',
    component: PortalMapOverviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPortalRoutingModule { }
