import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { ShareModule } from 'src/app/shared/widgets/share/share.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalAuthorDetailsMediaComponent } from './components/media/portal-author-details-media.component';
import { PortalAuthorDetailsComponent } from './components/portal-author-details.component';
import { authorDetailsStateKey } from './constants/portal-author-details.constants';
import { PortalAuthorDetailsRoutingModule } from './portal-author-details-routing.module';
import { AuthorDetailsEffects } from './state/portal-author-details.effects';
import { authorReducer } from './state/portal-author-details.reducer';

const components = [
  PortalAuthorDetailsComponent,
  PortalAuthorDetailsMediaComponent
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CardSliderComponent,
  CardModule,
  CoreModule,
  FavoriteComponent,
  MediaWidgetsModule,
  PortalAuthorDetailsRoutingModule,
  RadioButtonFormModule,
  ShareModule,
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
