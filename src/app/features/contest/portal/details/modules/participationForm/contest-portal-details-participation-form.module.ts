import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from 'src/app/shared/filter/date-range/date-range-filter.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { SuccessComponent } from 'src/app/shared/layout/success/success.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestPortalDetailsParticipationFormComponent } from './components/portal-contest-details-participation-form.component';
import { contestPortalDetailsParticipationFormStateKey } from './constants/contest-portal-details-participation-form.constants';
import { ContestPortalDetailsParticipationFormEffects } from './state/contest-portal-details-participation-form.effects';
import { contestPortalDetailsParticipationFormReducer } from './state/contest-portal-details-participation-form.reducer';

const components = [
  ContestPortalDetailsParticipationFormComponent
]

const framework = [
  CommonModule, ReactiveFormsModule, FormsModule
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  TableModule,
  DateRangeFilterComponent,
  TitleModule,
  GridLayoutModule,
  FormStepperModule,
  MediaFormModule,
  SuccessComponent
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsParticipationFormStateKey, contestPortalDetailsParticipationFormReducer),
  EffectsModule.forFeature([ContestPortalDetailsParticipationFormEffects]),
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
export class ContestPortalDetailsParticipationFormModule { }
