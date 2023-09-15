import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  TableModule,
  DateRangeFilterComponent
];

const libs = [
  StoreModule.forFeature(contestAdminDetailsCommentsStateKey, contestAdminDetailsCommentsReducer),
  EffectsModule.forFeature([ContestAdminDetailsCommentsEffects]),
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
