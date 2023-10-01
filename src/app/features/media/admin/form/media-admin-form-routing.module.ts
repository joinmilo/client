import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaAdminFormComponent } from './components/media-admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: MediaAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaAdminFormRoutingModule { }
