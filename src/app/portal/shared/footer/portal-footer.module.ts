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
import { PortalMenuModule } from '../menu/portal-menu.module';
import { PortalFooterAppStoreComponent } from './components/appstore/portal-footer-appstore.component';
import { PortalFooterDesktopComponent } from './components/desktop/portal-footer-desktop.component';
import { PortalFooterComponent } from './components/footer/portal-footer.component';
import { PortalFooterMobileComponent } from './components/mobile/portal-footer-mobile.component';
import { PortalFooterSocialMediaComponent } from './components/socialmedia/portal-footer-socialmedia.component';
import { portalFooterStateKey } from './constants/portal-footer.constants';
import { PortalFooterEffects } from './state/portal-footer.effects';
import { portalFooterReducer } from './state/portal-footer.reducer';

const components = [
  PortalFooterComponent,
  PortalFooterAppStoreComponent,
  PortalFooterDesktopComponent,
  PortalFooterMobileComponent,
  PortalFooterSocialMediaComponent,
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
  PortalMenuModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalFooterStateKey, portalFooterReducer),
  EffectsModule.forFeature([PortalFooterEffects]),
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
export class PortalFooterModule { }
