
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { guestArticleStateKey } from './constants/guest-article.constant';
import { GuestArticlePortalRoutingModule } from './guest-article-routing.module';
import { GuestArticleInputComponent } from './pages/guest-article-input/guest-article-input.component';
import { ReportEffects } from './state/guest-article.effects';
import { reportReducer } from './state/guest-article.reducer';

const components = [
  GuestArticleInputComponent
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatExpansionModule,
];

const modules = [
  CoreModule,
  FormModule,
  GuestArticlePortalRoutingModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(guestArticleStateKey, reportReducer),
  EffectsModule.forFeature([ReportEffects]),
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
export class PortalGuestArticleModule { }
