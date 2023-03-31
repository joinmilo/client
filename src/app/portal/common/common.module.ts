import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { SearchFieldComponent } from 'src/app/core/components/search-field/search-field.component';
import { CoreModule } from 'src/app/core/core.module';
import { PortalFooterAppStoreComponent } from './components/footer/appstore/portal-footer-appstore.component';
import { PortalFooterDesktopComponent } from './components/footer/desktop/portal-footer-desktop.component';
import { PortalFooterMobileComponent } from './components/footer/mobile/portal-footer-mobile.component';
import { PortalFooterComponent } from './components/footer/portal-footer.component';
import { PortalFooterSocialMediaComponent } from './components/footer/socialmedia/portal-footer-socialmedia.component';
import { PortalHeaderActionComponent } from './components/header/action/portal-header-action.component';
import { PortalHeaderDesktopComponent } from './components/header/desktop/portal-header-desktop.component';
import { PortalHeaderMobileComponent } from './components/header/mobile/portal-header-mobile.component';
import { PortalHeaderComponent } from './components/header/portal-header.component';
import { PortalMenuItemComponent } from './components/menu/menu-item/portal-menu-item.component';
import { commonFeatureKey } from './constants/common.constants';
import { PortalNotFoundComponent } from './pages/not-found/not-found.component';
import { CommonEffects } from './state/common.effects';
import { commonReducer } from './state/common.reducer';

const components = [
  PortalFooterComponent,
  PortalFooterAppStoreComponent,
  PortalFooterDesktopComponent,
  PortalFooterMobileComponent,
  PortalFooterSocialMediaComponent,
  
  PortalHeaderComponent,
  PortalHeaderActionComponent,
  PortalHeaderDesktopComponent,
  PortalHeaderMobileComponent,
  PortalMenuItemComponent,
  SearchFieldComponent,
];

const pages = [
  PortalNotFoundComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  RouterModule,
];

const materials = [
  FontAwesomeModule,
  MatExpansionModule,
  MatButtonModule,
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
  StoreModule.forFeature(commonFeatureKey, commonReducer),
  EffectsModule.forFeature([CommonEffects]),
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
