import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { CommentModule } from 'src/app/shared/comment/comment.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { EventCommentsComponent } from './components/comments/event-comments.component';
import { eventStateKey } from './constants/event.constant';
import { EventPortalRoutingModule } from './event-routing.module';
import { EventEffects } from './state/event.effects';
import { eventReducer } from './state/event.reducer';

const components = [
  EventCommentsComponent,
  
];

const framework = [
  CommonModule,
];

// const materials = [ ];

const modules = [
  CardModule,
  CoreModule,
  CommentModule,
  EventPortalRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
  MatDividerModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(eventStateKey, eventReducer),
  EffectsModule.forFeature([EventEffects]),
]

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
export class EventPortalModule { }
