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
import { NavigatorPortalDetailsQuestionsChoiceComponent } from './components/choice/navigator-portal-questions-choice.component';
import { NavigatorPortalQuestionsComponent } from './components/navigator-portal-questions.component';
import { NavigatorPortalQuestionsPageComponent } from './components/page/navigator-portal-questions-page.component';
import { navigatorPortalQuestionsStateKey } from './constants/navigator-questions.constant';
import { NavigatorPortalQuestionsRoutingModule } from './navigator-portal-questions-routing.module';
import { NavigatorPortalQuestionsEffects } from './state/navigator-portal-questions.effects';
import { navigatorAdminQuestionsReducer } from './state/navigator-portal-questions.reducer';

const components = [
  NavigatorPortalQuestionsComponent,
  NavigatorPortalQuestionsPageComponent,
  NavigatorPortalDetailsQuestionsChoiceComponent,
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
  NavigatorPortalQuestionsRoutingModule
];

const libs = [
  StoreModule.forFeature(navigatorPortalQuestionsStateKey, navigatorAdminQuestionsReducer),
  EffectsModule.forFeature([NavigatorPortalQuestionsEffects]),
  
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
export class NavigatorPortalQuestionsModule {}
