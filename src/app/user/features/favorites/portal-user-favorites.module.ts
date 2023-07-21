import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalFavoriteArticlesComponent } from './components/articles/portal-favorite-articles.component';
import { PortalFavoriteAuthorsComponent } from './components/authors/portal-favorite-authors.component';
import { PortalFavoriteDealsComponent } from './components/deals/portal-favorite-deals.component';
import { PortalFavoriteEventsComponent } from './components/events/portal-favorite-events.component';
import { PortalFavoriteOrganisationsComponent } from './components/organisations/portal-favorite-organisations.component';
import { PortalFavoritesComponent } from './components/portal-favorites.component';
import { portalFavoritesStateKey } from './constants/portal-favorites.constants';
import { PortalFavoritesRoutingModule } from './portal-user-favorite-routing.module';
import { PortalFavoritesEffects } from './state/portal-favorites.effects';
import { portalFavoritesReducer } from './state/portal-favorites.reducer';

const components = [
  PortalFavoritesComponent,
  PortalFavoriteArticlesComponent,
  PortalFavoriteAuthorsComponent,
  PortalFavoriteDealsComponent,
  PortalFavoriteEventsComponent,
  PortalFavoriteOrganisationsComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  CardModule,
  PortalFavoritesRoutingModule,
  RadioButtonFormModule,
  TitleModule,
  TableModule,
  MatCardModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalFavoritesStateKey, portalFavoritesReducer),
  EffectsModule.forFeature([PortalFavoritesEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalFavoritesModule { }
