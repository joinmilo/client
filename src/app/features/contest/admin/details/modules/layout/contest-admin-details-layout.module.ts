import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { ContestAdminDetailsLayoutComponent } from './components/contest-admin-details-layout.component';
import { contestAdminDetailsLayoutStateKey } from './constants/contest-admin-details-layout.constants';
import { ContestAdminDetailsLayoutEffects } from './state/contest-admin-details-layout.effects';
import { contestAdminDetailsLayoutReducer } from './state/contest-admin-details-layout.reducer';

const components = [
  ContestAdminDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  EffectsModule.forFeature([ContestAdminDetailsLayoutEffects]),
  StoreModule.forFeature(contestAdminDetailsLayoutStateKey, contestAdminDetailsLayoutReducer),

  IconComponent,
  PageTitleComponent,
  RadioCardGroupComponent,
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
export class ContestAdminDetailsLayoutModule { }
