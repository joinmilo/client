import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from 'src/app/shared/widgets/icons/icon.component';
import { RadioButtonFormModule } from '../../../form/radio-button/radio-button-form.module';
import { TitleModule } from '../../../layout/title/title.module';
import { SliderHeaderComponent } from '../../../widgets/sliders/slider-header/slider-header.component';
import { SliderComponent } from '../../../widgets/sliders/slider/slider.component';
import { MediaAttributionDirective } from '../../directives/media-attribution.directive';
import { MediaService } from '../../services/media.service';
import { MediaActionCardComponent } from './components/action-card/media-action-card.component';
import { MediaAttributionComponent } from './components/attribution/media-attribution.component';
import { MediaAvatarComponent } from './components/avatar/media-avatar.component';
import { MediaExternalConsentComponent } from './components/consent/media-external-consent.component';
import { MediaElementComponent } from './components/element/media-element.component';
import { MediaGalleryComponent } from './components/gallery/media-gallery.component';
import { MediaSliderComponent } from './components/slider/media-slider.component';
import { MediaTitleComponent } from './components/title/media-title.component';
import { MediaVideoComponent } from './components/video/media-video.component';
import { MediaViewCardComponent } from './components/view-card/media-view-card.component';
import { MediaViewerComponent } from './components/viewer/media-viewer.component';

const components = [
  MediaActionCardComponent,
  MediaAvatarComponent,
  MediaAttributionComponent,
  MediaElementComponent,
  MediaExternalConsentComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaViewCardComponent,
  MediaViewerComponent,
  MediaVideoComponent,
  MediaTitleComponent
];

const directives = [
  MediaAttributionDirective,
]

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  IconComponent,
  SliderComponent,
  RadioButtonFormModule,
  SliderHeaderComponent,
  TitleModule,
];

const providers = [
  MediaService,
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
    ...directives,
  ],
  providers: [
    ...providers,
  ]
})
export class MediaWidgetsModule { }
