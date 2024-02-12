import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaAvatarComponent, MediaGalleryComponent, MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
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
  PortalAuthorDetailsRoutingModule,
];

const libs = [
  StoreModule.forFeature(authorDetailsStateKey, authorReducer),
  EffectsModule.forFeature([AuthorDetailsEffects]),

  IconComponent,
  MediaAvatarComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaTitleComponent,
  PageTitleComponent,
  ShareButtonComponent,
  TranslatablePipe,
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
