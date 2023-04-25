import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalLandingComponent } from './components/landing/portal-landing.component';
import { PortalPageComponent } from './components/page/portal-page.component';
import { pageSlug } from './constants/portal-main.constants';

const routes: Routes = [
  {
    path: '',
    component: PortalLandingComponent
  },
  {
    path: `:${pageSlug}`,
    component: PortalPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalMainRoutingModule { }
