import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { DealAdminDetailsFavoritesComponent } from './components/deal-admin-details-favorites.component';
import { dealAdminDetailsFavoritesStateKey } from './constants/deal-admin-details-favorites.constants';
import { DealAdminDetailsFavoritesEffects } from './state/deal-admin-details-favorites.effects';
import { dealAdminDetailsFavoritesReducer } from './state/deal-admin-details-favorites.reducer';

const components = [
  DealAdminDetailsFavoritesComponent,
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
  StoreModule.forFeature(dealAdminDetailsFavoritesStateKey, dealAdminDetailsFavoritesReducer),
  EffectsModule.forFeature([DealAdminDetailsFavoritesEffects]),
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
export class DealAdminDetailsFavoritesModule { }
