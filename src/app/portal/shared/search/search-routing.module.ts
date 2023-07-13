import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/component/not-found.component';
import { PortalSearchResultComponent } from './components/result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
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
