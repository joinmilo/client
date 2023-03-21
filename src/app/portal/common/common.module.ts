import { MenuMobileComponent } from './../../core/components/menu-mobile/menu-mobile.component';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchFieldComponent } from 'src/app/core/components/search-field/search-field.component';
import { CoreModule } from 'src/app/core/core.module';
import { PortalFooterAppStoreComponent } from './components/footer/appstore/portal-footer-appstore.component';
import { PortalFooterDesktopComponent } from './components/footer/desktop/portal-footer-desktop.component';
import { PortalFooterMobileComponent } from './components/footer/mobile/portal-footer-mobile.component';
import { PortalFooterComponent } from './components/footer/portal-footer.component';
import { PortalFooterSocialMediaComponent } from './components/footer/socialmedia/portal-footer-socialmedia.component';
import { PortalHeaderComponent } from './components/header/portal-header.component';
import { PortalMenuComponent } from './components/menu/portal-menu.component';
import { commonFeatureKey } from './constants/common.constants';
import { PortalNotFoundComponent } from './pages/not-found/not-found.component';
import { CommonEffects } from './state/common.effects';
import { commonReducer } from './state/common.reducer';

const components: Type<any>[] = [
  PortalFooterComponent,
  PortalFooterAppStoreComponent,
  PortalFooterDesktopComponent,
  PortalFooterMobileComponent,
  PortalFooterSocialMediaComponent,
  
  PortalHeaderComponent,
  PortalMenuComponent,
  SearchFieldComponent,
  MenuMobileComponent
];

const pages: Type<any>[] = [
  PortalNotFoundComponent,
];

const framework: Type<any>[] = [
  CommonModule,
  RouterModule,
  MatMenuModule
];

const materials: Type<any>[] = [
  FontAwesomeModule,
  MatExpansionModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatMenuModule,
  FormsModule,
  MatExpansionModule,
  MatInputModule
];

const modules: Type<any>[] = [
  CoreModule,
];

@NgModule({
  declarations: [
    ...components,
    ...pages,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    StoreModule.forFeature(commonFeatureKey, commonReducer),
    EffectsModule.forFeature([CommonEffects]),
  ],
  exports: [
    ...components,
  ],
})
export class PortalCommonModule { }
