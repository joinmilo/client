import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
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
  RadioButtonFormModule,
  PortalAuthorOverviewRoutingModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(portalAuthorOverviewStateKey, portalAuthorOverviewReducer),
  EffectsModule.forFeature([PortalAuthorOverviewEffects]),
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
