import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  AddressPieceComponent,
  CoreModule,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
];

const libs = [
  IconComponent,
  StoreModule.forFeature(articleAdminDetailsLayoutStateKey, articleAdminDetailsLayoutReducer),
  EffectsModule.forFeature([ArticleAdminDetailsLayoutEffects]),
  RadioCardGroupComponent,
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
