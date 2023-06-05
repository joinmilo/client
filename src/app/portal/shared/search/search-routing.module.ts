import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSearchResultComponent } from './components/result/search-result.component';
import { PortalSearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSearchComponent,
  },
  {
    path: 'result',
    component: PortalSearchResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalSearchRoutingModule { }
