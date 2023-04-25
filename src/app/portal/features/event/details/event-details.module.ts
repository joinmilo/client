import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { EventDetailsComponent } from './components/details/event-details.component';
import { portalEventDetailsStateKey } from './constants/event-details.constant';
import { EventPortalRoutingModule } from './event-details-routing.module';
import { PortalEventDetailsEffects } from './state/event-details.effects';
import { portalEventDetailsReducer } from './state/event-details.reducer';

const components = [
  EventDetailsComponent,
];

const framework = [
  CommonModule,
];

// const materials = [ ];

const modules = [
  CoreModule,
  CardModule,
  EventPortalRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalEventDetailsStateKey, portalEventDetailsReducer),
  EffectsModule.forFeature([PortalEventDetailsEffects]),
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
export class PortalEventDetailsModule { }
