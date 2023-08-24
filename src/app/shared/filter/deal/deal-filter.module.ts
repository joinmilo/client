import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FilterAreaComponent } from '../filter-area/filter-area.component';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
import { DealFilterCategoryComponent } from './components/category/deal-filter-category.component';
import { DealFilterComponent } from './components/deal-filter.component';
import { DealFilterOfferComponent } from './components/offer/deal-filter-offer.component';
import { DealFilterSearchComponent } from './components/search/deal-filter-search.component';
import { dealFilterStateKey } from './constants/deal-filter.constants';
import { DealFilterEffects } from './state/deal-filter.effects';
import { dealFilterReducer } from './state/deal-filter.reducer';

const components = [
  DealFilterComponent,
  DealFilterCategoryComponent,
  DealFilterOfferComponent,
  DealFilterSearchComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  SuburbFilterModule,

  FilterAreaComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(dealFilterStateKey, dealFilterReducer),
  EffectsModule.forFeature([DealFilterEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class DealFilterModule { }