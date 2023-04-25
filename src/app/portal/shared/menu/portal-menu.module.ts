import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalMenuAccordionComponent } from './components/accordion/portal-menu-accordion.component';
import { PortalMenuOverlayComponent } from './components/overlay-menu/portal-menu-overlay.component';
import { portalMenuStateKey } from './constants/menu.constants';
import { PortalMenuEffects } from './state/portal-menu.effects';
import { portalMenuReducer } from './state/portal-menu.reducer';

const components = [  
  PortalMenuAccordionComponent,
  PortalMenuOverlayComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const materials = [
  MatAutocompleteModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalMenuStateKey, portalMenuReducer),
  EffectsModule.forFeature([PortalMenuEffects]),
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
export class PortalMenuModule { }
