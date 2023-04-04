import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestArticleInputComponent } from './pages/guest-article-input/guest-article-input.component';

const routes: Routes = [

  {
    path: '',
    component: GuestArticleInputComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestArticlePortalRoutingModule { }
