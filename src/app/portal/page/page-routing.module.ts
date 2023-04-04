import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageSlug } from './constants/page.constants';
import { PageLandingComponent } from './pages/landing/page-landing.component';
import { PageComponent } from './pages/page/page.component';

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
export class PagePortalRoutingModule { }
