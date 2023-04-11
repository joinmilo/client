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
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { CoreModule } from 'src/app/core/core.module';
import { SearchModule } from '../search/search.module';
import { PortalFooterAppStoreComponent } from './components/footer/appstore/portal-footer-appstore.component';
import { PortalFooterDesktopComponent } from './components/footer/desktop/portal-footer-desktop.component';
import { PortalFooterMobileComponent } from './components/footer/mobile/portal-footer-mobile.component';
import { PortalFooterComponent } from './components/footer/portal-footer.component';
import { PortalFooterSocialMediaComponent } from './components/footer/socialmedia/portal-footer-socialmedia.component';
import { PortalHeaderBackComponent } from './components/header/back/portal-header-back.component';
import { PortalHeaderDesktopComponent } from './components/header/desktop/portal-header-desktop.component';
import { PortalHeaderLanguageComponent } from './components/header/language/portal-header-language.component';
import { PortalHeaderMobileComponent } from './components/header/mobile/portal-header-mobile.component';
import { PortalHeaderComponent } from './components/header/portal-header.component';
import { PortalHeaderUserComponent } from './components/header/user/portal-header-user.component';
import { PortalMenuAccordionComponent } from './components/menu/accordion/portal-menu-accordion.component';
import { PortalMenuOverlayComponent } from './components/menu/overlay-menu/portal-menu-overlay.component';
import { commonStateKey } from './constants/common.constants';
import { PortalNotFoundComponent } from './pages/not-found/not-found.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CommonEffects } from './state/common.effects';
import { commonReducer } from './state/common.reducer';

const components = [
  PortalFooterComponent,
  PortalFooterAppStoreComponent,
  PortalFooterDesktopComponent,
  PortalFooterMobileComponent,
  PortalFooterSocialMediaComponent,
  PortalHeaderComponent,
  PortalHeaderBackComponent,
  PortalHeaderDesktopComponent,
  PortalHeaderMobileComponent,
  PortalHeaderLanguageComponent,
  PortalHeaderUserComponent,
  
  PortalMenuAccordionComponent,
  PortalMenuOverlayComponent,
];

const pages = [
  PortalNotFoundComponent,
  RegistrationComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ReactiveFormsModule,
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
  MatSelectModule
];

const modules = [
  CoreModule,
  SearchModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(commonStateKey, commonReducer),
  EffectsModule.forFeature([CommonEffects]),
  NgHcaptchaModule.forRoot({
    languageCode: 'de' //TODO
  }),
]

@NgModule({
  declarations: [
    ...components,
    ...pages,
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
export class PortalCommonModule { }
