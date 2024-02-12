import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleAdminDetailsLayoutComponent } from './components/article-admin-details-layout.component';
import { articleAdminDetailsLayoutStateKey } from './constants/article-admin-details-layout.constants';
import { ArticleAdminDetailsLayoutEffects } from './state/article-admin-details-layout.effects';
import { articleAdminDetailsLayoutReducer } from './state/article-event-admin-details-layout.reducer';

const components = [
  ArticleAdminDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  IconComponent,
  StoreModule.forFeature(articleAdminDetailsLayoutStateKey, articleAdminDetailsLayoutReducer),
  EffectsModule.forFeature([ArticleAdminDetailsLayoutEffects]),

  I18nDirective,
  PageTitleComponent,
  RadioCardGroupComponent,
  TranslatablePipe,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components
  ],
})
export class ArticleAdminDetailsLayoutModule { }
