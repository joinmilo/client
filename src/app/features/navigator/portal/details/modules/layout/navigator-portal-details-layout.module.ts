import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { GradientButtonComponent } from 'src/app/shared/widgets/gradient-button/gradient-button.component';
import { NavigatorPortalDetailsLayoutChoiceComponent } from './components/choice/navigator-portal-details-layout-choice.component';
import { NavigatorPortalDetailsLayoutComponent } from './components/navigator-portal-details-layout.component';
import { NavigatorPortalDetailsLayoutPageComponent } from './components/page/navigator-portal-details-layout-page.component';
import { navigatorPortalDetailsLayoutStateKey } from './constants/navigator-portal-details-layout.constants';
import { NavigatorPortalDetailsLayoutEffects } from './state/navigator-portal-details-layout.effects';
import { navigatorAdminDetailsLayoutReducer } from './state/navigator-portal-details-layout.reducer';

const components = [
  NavigatorPortalDetailsLayoutComponent,
  NavigatorPortalDetailsLayoutPageComponent,
  NavigatorPortalDetailsLayoutChoiceComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatExpansionModule
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(navigatorPortalDetailsLayoutStateKey, navigatorAdminDetailsLayoutReducer),
  EffectsModule.forFeature([NavigatorPortalDetailsLayoutEffects]),
  
  GradientButtonComponent,
  IconComponent,
  I18nDirective,
  DetailsTitleComponent,
  RadioCardGroupComponent,
  TranslatablePipe,
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
export class NavigatorPortalDetailsLayoutModule { }
