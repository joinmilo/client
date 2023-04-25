import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalSearchRoutingModule { }
