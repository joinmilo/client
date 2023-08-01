import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { CommentModule } from 'src/app/shared/comment/comment.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { AvatarComponent } from 'src/app/shared/image/avatar/avatar.component';
import { TitleImageComponent } from 'src/app/shared/image/title/title-image.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { RatingModule } from 'src/app/shared/rating/rating.module';
import { ShareModule } from 'src/app/shared/share/share.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalArticleDetailsAuthorComponent } from './components/author/portal-article-details-author.component';
import { PortalArticleDetailsCommentComponent } from './components/comment/portal-article-details-comment.component';
import { PortalArticleDetailsCommentsComponent } from './components/comments/portal-article-details-comments.component';
import { PortalArticleDetailsComponent } from './components/portal-article-details.component';
import { PortalArticleDetailsRatingComponent } from './components/rating/portal-article-details-rating.component';
import { portalArticleDetailsStateKey } from './constants/article-details.constant';
import { PortalArticleDetailsRoutingModule } from './portal-article-details-routing.module';
import { PortalArticleDetailsEffects } from './state/portal-article-details.effects';
import { portalArticleDetailsReducer } from './state/portal-article-details.reducer';

const components = [
  PortalArticleDetailsComponent,
  PortalArticleDetailsCommentComponent,
  PortalArticleDetailsCommentsComponent,
  PortalArticleDetailsAuthorComponent,
  PortalArticleDetailsRatingComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CalendarModule,
  MapModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
];

const modules = [
  AvatarComponent,
  CoreModule,
  CommentModule,
  CardModule,
  MediaModule,
  PortalArticleDetailsRoutingModule,
  RadioButtonFormModule,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule,
  TitleImageComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalArticleDetailsStateKey, portalArticleDetailsReducer),
  EffectsModule.forFeature([PortalArticleDetailsEffects]),
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
export class PortalArticleDetailsModule { }
