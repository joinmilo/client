import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { AuthorPortalRoutingModule } from './author-routing.module';
import { AuthorOverviewComponent } from './components/overview/author-overview.component';
import { authorStateKey } from './constants/author.constant';
import { AuthorEffects } from './state/author.effects';
import { authorReducer } from './state/author.reducer';

const components = [
  AuthorOverviewComponent,
];

const framework = [
  CommonModule,
];

// const materials = [ ];

const modules = [
  CoreModule,
  CardModule,
  AuthorPortalRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
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
    // ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class AuthorPortalModule { }
