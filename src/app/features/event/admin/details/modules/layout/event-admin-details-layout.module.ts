import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { EventAdminDetailsLayoutComponent } from './components/event-admin-details-layout.component';
import { eventAdminDetailsLayoutStateKey } from './constants/event-admin-details-layout.constants';
import { EventAdminDetailsLayoutEffects } from './state/event-admin-details-layout.effects';
import { eventAdminDetailsLayoutReducer } from './state/event-admin-details-layout.reducer';

const components = [
  EventAdminDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(eventAdminDetailsLayoutStateKey, eventAdminDetailsLayoutReducer),
  EffectsModule.forFeature([EventAdminDetailsLayoutEffects]),
  
  IconComponent,
  RadioCardGroupComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class EventAdminDetailsLayoutModule { }
