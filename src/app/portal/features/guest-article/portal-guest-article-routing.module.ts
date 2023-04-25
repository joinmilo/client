import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalGuestArticleFormComponent } from './components/guest-article-form/portal-guest-article-form.component';

const routes: Routes = [

  {
    path: '',
    component: PortalGuestArticleFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalGuestArticleRoutingModule { }
