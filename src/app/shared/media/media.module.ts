import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { RadioButtonFormModule } from '../form/radio-button/radio-button-form.module';
import { SliderHeaderComponent } from '../sliders/slider-header/slider-header.component';
import { SliderComponent } from '../sliders/slider/slider.component';
import { TitleModule } from '../title/title.module';
import { MediaAttributionComponent } from './components/attribution/media-attribution.component';
import { MediaCardComponent } from './components/card/media-card.component';
import { MediaFormComponent } from './components/form/media-form.component';
import { MediaGalleryComponent } from './components/gallery/media-gallery.component';
import { MediaSliderComponent } from './components/slider/media-slider.component';
import { MediaUploadComponent } from './components/upload/media-upload.component';
import { MediaVideoComponent } from './components/video/media-video.component';
import { MediaViewerComponent } from './components/viewer/media-viewer.component';
import { MediaAttributionDirective } from './directives/media-attribution.directive';
import { ContentModule } from '../content/content.module';

const components = [
  MediaAttributionComponent,
  MediaCardComponent,
  MediaFormComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaUploadComponent,
  MediaViewerComponent,
  MediaVideoComponent,
];

const directives = [
  MediaAttributionDirective,
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule
];

const materials = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  SliderComponent,
  RadioButtonFormModule,
  SliderHeaderComponent,
  TitleModule,
  ContentModule
];

const libs = [
  FontAwesomeModule,
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
    ...directives,
  ],
})
export class MediaModule { }
