import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestPortalDetailsCommentsComponent } from './components/contest-portal-details-comments.component';
import { contestPortalDetailsCommentsStateKey } from './constants/contest-portal-details-comments.constants';
import { ContestPortalDetailsCommentsEffects } from './state/contest-portal-details-comments.effects';
import { contestPortalDetailsCommentsReducer } from './state/contest-portal-details-comments.reducer';

const components = [
  ContestPortalDetailsCommentsComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CommentModule,
  CoreModule,
  DateRangeFilterComponent,
  TableModule,
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsCommentsStateKey, contestPortalDetailsCommentsReducer),
  EffectsModule.forFeature([ContestPortalDetailsCommentsEffects]),
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
export class ContestPortalDetailsCommentsModule { }
