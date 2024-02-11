import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { TableCardComponent } from 'src/app/shared/widgets/table-card/table-card.component';
import { PortalAuthorOverviewComponent } from './components/portal-author-overview.component';
import { portalAuthorOverviewStateKey } from './constants/portal-author-overview.constants';
import { PortalAuthorOverviewRoutingModule } from './portal-author-overview-routing.module';
import { PortalAuthorOverviewEffects } from './state/portal-author-overview.effects';
import { portalAuthorOverviewReducer } from './state/portal-author-overview.reducer';

const components = [
  PortalAuthorOverviewComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardModule,
  PortalAuthorOverviewRoutingModule,
  TableCardComponent,
];

const libs = [
  StoreModule.forFeature(portalAuthorOverviewStateKey, portalAuthorOverviewReducer),
  EffectsModule.forFeature([PortalAuthorOverviewEffects]),

  PageTitleComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalAuthorOverviewModule { }
