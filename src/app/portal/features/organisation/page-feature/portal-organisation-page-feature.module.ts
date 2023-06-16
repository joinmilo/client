import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { OrganisationPageFeatureComponent } from './component/organisation-page-feature.component';
import { organisationPageFeatureStateKey } from './constants/organisation-page-feature.constants';
import { OrganisationPageFeatureEffects } from './state/organisation-page-feature.effects';
import { organisationPageFeatureReducer } from './state/organisation-page-feature.reducer';

const components = [
  OrganisationPageFeatureComponent
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardModule,
];

const libs = [
  StoreModule.forFeature(organisationPageFeatureStateKey, organisationPageFeatureReducer),
  EffectsModule.forFeature([OrganisationPageFeatureEffects]),
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
export class PortalOrganisationPageFeatureModule { }
