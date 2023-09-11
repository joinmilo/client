import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaAdminOverviewComponent } from './components/media-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: MediaAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaAdminOverviewRoutingModule { }
