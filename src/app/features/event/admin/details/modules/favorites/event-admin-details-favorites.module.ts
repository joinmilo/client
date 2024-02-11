import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { EventAdminDetailsFavoritesComponent } from './components/event-admin-details-favorites.component';
import { eventAdminDetailsFavoritesStateKey } from './constants/event-admin-details-favorites.constants';
import { EventAdminDetailsFavoritesEffects } from './state/event-admin-details-favorites.effects';
import { eventAdminDetailsFavoritesReducer } from './state/event-admin-details-favorites.reducer';

const components = [
  EventAdminDetailsFavoritesComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [  
  StoreModule.forFeature(eventAdminDetailsFavoritesStateKey, eventAdminDetailsFavoritesReducer),
  EffectsModule.forFeature([EventAdminDetailsFavoritesEffects]),

  TableComponent,
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
export class EventAdminDetailsFavoritesModule { }
