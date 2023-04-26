import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SocialShareButtonModule } from 'src/app/core/components/pieces/share-button/social-share.module';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCommonModule } from 'src/app/portal/common/common.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { AuthorPortalRoutingModule } from './author-routing.module';
import { AuthorDetailsComponent } from './components/details/author-details.component';
import { AuthorOverviewComponent } from './components/overview/author-overview.component';
import { authorStateKey } from './constants/author.constant';
import { AuthorEffects } from './state/author.effects';
import { authorReducer } from './state/author.reducer';

const components = [
  AuthorOverviewComponent,
  AuthorDetailsComponent,
];

const framework = [
  CommonModule,
];

const materials = [ 
  MatButtonModule,
];

const modules = [
  CoreModule,
  CardModule,
  AuthorPortalRoutingModule,
  FormModule,
  PortalCommonModule,
  TableModule,
  TitleModule,
  SocialShareButtonModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(authorStateKey, authorReducer),
  EffectsModule.forFeature([AuthorEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class AuthorPortalModule { }
