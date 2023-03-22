import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSearchResultComponent } from './portal/common/pages/free-search/search-result.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module')
      .then((imported) => imported.PortalModule),
    component: PortalComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/portal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
