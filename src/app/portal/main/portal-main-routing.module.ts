import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slug } from 'src/app/core/constants/core.constants';
import { PortalLandingComponent } from './components/landing/portal-landing.component';
import { PortalPageMediaComponent } from './components/page/media/portal-page-media.component';
import { PortalPageComponent } from './components/page/portal-page.component';

const routes: Routes = [
  {
    path: '',
    component: PortalLandingComponent
  },
  {
    path: `:${slug}`,
    component: PortalPageComponent
  },
  {
    path: `:${slug}/media`,
    component: PortalPageMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalMainRoutingModule { }
