import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalAuthorDetailsComponent } from './component/portal-author-details.component';
import { authorDetailsStateKey } from './constants/portal-author-details.constants';
import { PortalAuthorDetailsRoutingModule } from './portal-author-details-routing.module';
import { AuthorDetailsEffects } from './state/portal-author-details.effects';
import { authorReducer } from './state/portal-author-details.reducer';

const components = [
  PortalAuthorDetailsComponent
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
  FormModule,
  PortalAuthorDetailsRoutingModule,
  SocialSharModule,
  TableModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(authorDetailsStateKey, authorReducer),
  EffectsModule.forFeature([AuthorDetailsEffects]),
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
export class PortalAuthorDetailsModule { }
