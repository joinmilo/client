import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DateRangeFilterComponent } from 'ngx-cinlib/filters/date-range';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { ContestAdminDetailsCommentsComponent } from './components/contest-admin-details-comments.component';
import { contestAdminDetailsCommentsStateKey } from './constants/contest-admin-details-comments.constants';
import { ContestAdminDetailsCommentsEffects } from './state/contest-admin-details-comments.effects';
import { contestAdminDetailsCommentsReducer } from './state/contest-admin-details-comments.reducer';

const components = [
  ContestAdminDetailsCommentsComponent,
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
  StoreModule.forFeature(contestAdminDetailsCommentsStateKey, contestAdminDetailsCommentsReducer),
  EffectsModule.forFeature([ContestAdminDetailsCommentsEffects]),

  DateRangeFilterComponent,
  TableComponent,
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
export class ContestAdminDetailsCommentsModule { }
