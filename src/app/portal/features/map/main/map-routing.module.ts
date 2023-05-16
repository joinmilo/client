import {NgModule} from '@angular/core';
import {MapPageComponent} from './components/map/map.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: MapPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPortalRoutingModule { }
