import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaSliderComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { ContestAdminDetailsLandingComponent } from './components/contest-admin-details-landing.component';
import { contestAdminDetailsLandingStateKey } from './constants/contest-admin-details-landing.constants';
import { ContestAdminDetailsLandingEffects } from './state/contest-admin-details-landing.effects';
import { contestAdminDetailsLandingReducer } from './state/contest-admin-details-landing.reducer';

const components = [
  ContestAdminDetailsLandingComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(contestAdminDetailsLandingStateKey, contestAdminDetailsLandingReducer),
  EffectsModule.forFeature([ContestAdminDetailsLandingEffects]),

  DetailsTitleComponent,
  MediaSliderComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class ContestAdminDetailsLandingModule { }
