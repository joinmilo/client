
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { ContactCardComponent } from './components/contact/contact-card.component';
import { ContentCardComponent } from './components/content/content-card.component';
import { FileCardComponent } from './components/file/file-card.component';
import { SponsoredCardComponent } from './components/sponsored/sponsored-card.component';

const components = [
  ContactCardComponent,
  ContentCardComponent,
  FileCardComponent,
  SponsoredCardComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
];

const modules = [
  CoreModule,
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