import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from './components/landing/page-landing.component';
import { PageComponent } from './components/page/page.component';
import { pageSlug } from './constants/page.constants';

const routes: Routes = [
  {
    path: '',
    component: PageLandingComponent
  },
  {
    path: `:${pageSlug}`,
    component: PageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalPageRoutingModule { }
