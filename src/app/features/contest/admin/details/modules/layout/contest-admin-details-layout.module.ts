import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  AddressPieceComponent,
  CalendarModule,
  CoreModule,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
];

const libs = [
  EffectsModule.forFeature([ContestAdminDetailsLayoutEffects]),
  StoreModule.forFeature(contestAdminDetailsLayoutStateKey, contestAdminDetailsLayoutReducer),

  IconComponent,
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
