
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { NavigatorPortalQuestionsComponent } from './components/navigator-portal-questions.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorPortalQuestionsComponent
  },
  {
    path: `:${slug}`,
    component: NavigatorPortalQuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorPortalQuestionsRoutingModule { }
