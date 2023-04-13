
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from '../title/title.module';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { SponsoredCardComponent } from './components/sponsored-card/sponsored-card.component';

const components = [
  CardSliderComponent,
  ContactCardComponent,
  ContentCardComponent,
  SponsoredCardComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatCardModule,
  MatChipsModule,
];

const modules = [
  CoreModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
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
export class CardModule { }