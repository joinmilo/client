import { NgModule } from '@angular/core';
import { ContestPortalDetailsRoutingModule } from './contest-portal-details-routing.module';

const modules = [ContestPortalDetailsRoutingModule];

@NgModule({
  imports: [...modules],
  exports: [],
})
export class PortalContestDetailsModule {}
