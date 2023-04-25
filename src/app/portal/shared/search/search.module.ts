import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalSearchButtonComponent } from './components/button/search-button.component';
import { SearchInputComponent } from './components/input/search-input.component';
import { PortalSearchResultComponent } from './components/result/search-result.component';
import { PortalSearchComponent } from './components/search/search.component';
import { searchStateKey } from './constants/search.constants';
import { PortalSearchRoutingModule } from './search-routing.module';
import { SearchEffects } from './state/search.effects';
import { searchReducer } from './state/search.reducer';

const components = [
  PortalSearchComponent,
  PortalSearchButtonComponent,
  SearchInputComponent,
  PortalSearchResultComponent
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
];

const materials = [
  MatAutocompleteModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CoreModule,
  CardModule,
  PortalSearchRoutingModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(searchStateKey, searchReducer),
  EffectsModule.forFeature([SearchEffects]),
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
})
export class PortalSearchModule { }
