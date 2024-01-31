import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  TableModule,
];

const libs = [  
  StoreModule.forFeature(eventAdminDetailsFavoritesStateKey, eventAdminDetailsFavoritesReducer),
  EffectsModule.forFeature([EventAdminDetailsFavoritesEffects]),
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
