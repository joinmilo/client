import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module')
      .then((imported) => imported.PortalModule),
    component: PortalComponent,
  },
  
    {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then((imported) => imported.UserModule),
    component: UserComponent,
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/portal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
