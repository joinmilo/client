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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { CategoryPieceComponent } from 'src/app/shared/layout/category/category-piece.component';
import { DatePieceComponent } from 'src/app/shared/layout/date/date-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { ShareModule } from 'src/app/shared/widgets/share/share.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ArticlePortalDetailsRoutingModule } from './article-portal-details-routing.module';
import { ArticlePortalDetailsComponent } from './components/article-portal-details.component';
import { ArticlePortalDetailsAuthorComponent } from './components/author/article-portal-details-author.component';
import { ArticlePortalDetailsCommentComponent } from './components/comment/article-portal-details-comment.component';
import { ArticlePortalDetailsCommentsComponent } from './components/comments/article-portal-details-comments.component';
import { ArticlePortalDetailsMediaComponent } from './components/media/article-portal-details-media.component';
import { ArticlePortalDetailsRatingComponent } from './components/rating/article-portal-details-rating.component';
import { articlePortalDetailsStateKey } from './constants/article-portal-details.constant';
import { ArticlePortalDetailsEffects } from './state/article-portal-details.effects';
import { articlePortalDetailsReducer } from './state/article-portal-details.reducer';

const components = [
  ArticlePortalDetailsComponent,
  ArticlePortalDetailsCommentComponent,
  ArticlePortalDetailsCommentsComponent,
  ArticlePortalDetailsAuthorComponent,
  ArticlePortalDetailsRatingComponent,
  ArticlePortalDetailsMediaComponent
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
  MatMenuModule,
];

const modules = [
  ArticlePortalDetailsRoutingModule,
  CategoryPieceComponent,
  CardModule,
  CoreModule,
  CommentModule,
  DatePieceComponent,
  FavoriteComponent,
  MediaWidgetsModule,
  RadioButtonFormModule,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule
];

const libs = [
  StoreModule.forFeature(articlePortalDetailsStateKey, articlePortalDetailsReducer),
  EffectsModule.forFeature([ArticlePortalDetailsEffects]),
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
export class ArticlePortalDetailsModule { }
