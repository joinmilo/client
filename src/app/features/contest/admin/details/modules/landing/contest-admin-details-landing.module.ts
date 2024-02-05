import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { IconComponent } from 'src/app/shared/widgets/icon/icon.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  AddressPieceComponent,
  CalendarModule,
  CoreModule,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
  IconComponent
];

const libs = [
  StoreModule.forFeature(contestAdminDetailsLandingStateKey, contestAdminDetailsLandingReducer),
  EffectsModule.forFeature([ContestAdminDetailsLandingEffects]),
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
