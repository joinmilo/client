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
import { authorStateKey } from '../details/constants/portal-author-details.constant';
import { PortalAuthorOverviewComponent } from './components/portal-author-overview.component';
import { PortalAuthorOverviewRoutingModule } from './portal-author-overview-routing.module';
import { AuthorEffects } from './state/portal-author-overview.effects';
import { authorReducer } from './state/portal-author-overview.reducer';

const components = [
  PortalAuthorOverviewComponent,
];

const framework = [
  CommonModule,
];

// const materials = [ ];

const modules = [
  CoreModule,
  CardModule,
  FormModule,
  PortalAuthorOverviewRoutingModule,
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
