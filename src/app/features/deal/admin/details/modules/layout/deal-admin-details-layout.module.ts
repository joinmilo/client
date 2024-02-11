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
import { DealAdminDetailsLayoutComponent } from './components/deal-admin-details-layout.component';
import { dealAdminDetailsLayoutStateKey } from './constants/deal-admin-details-layout.constants';
import { DealAdminDetailsLayoutEffects } from './state/deal-admin-details-layout.effects';
import { dealAdminDetailsLayoutReducer } from './state/deal-admin-details-layout.reducer';

const components = [
  DealAdminDetailsLayoutComponent,
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
  EffectsModule.forFeature([DealAdminDetailsLayoutEffects]),
  StoreModule.forFeature(dealAdminDetailsLayoutStateKey, dealAdminDetailsLayoutReducer),

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
export class DealAdminDetailsLayoutModule { }
