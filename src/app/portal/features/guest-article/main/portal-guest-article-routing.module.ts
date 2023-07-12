import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalGuestArticleFormComponent } from './components/form/portal-guest-article-form.component';
import { PortalGuestArticleSuccessComponent } from './components/success/portal-guest-article-success.component';

const routes: Routes = [
  {
    path: '',
    component: PortalGuestArticleFormComponent
  },
  {
    path: 'success',
    component: PortalGuestArticleSuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalGuestArticleRoutingModule { }
