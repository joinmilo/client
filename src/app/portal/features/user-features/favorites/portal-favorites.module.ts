import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalFavoritesComponent } from './components/portal-favorites.component';
import { PortalFavoritesRoutingModule } from './portal-favorite-routing.module';

const components = [
  PortalFavoritesComponent
];

const framework = [
  CommonModule,
];

// const materials = [

// ];

const modules = [
  CoreModule,
  CardModule,
  CardSliderComponent,
  PortalFavoritesRoutingModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  // StoreModule.forFeature(portalOrganisationOverviewStateKey, portalOrganisationOverviewReducer),
  // EffectsModule.forFeature([PortalOrganisationOverviewEffects]),
];

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
export class PortalFavoritesModule { }
