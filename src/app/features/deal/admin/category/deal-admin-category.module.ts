import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { DealFilterModule } from 'src/app/shared/filter/deal/deal-filter.module';
import { DealAdminCategoryComponent } from './component/deal-admin-category.component';
import { dealAdminCategoryStateKey } from './constants/deal-admin-category.constants';
import { DealAdminCategoryRoutingModule } from './deal-admin-category-routing.module';
import { DealAdminCategoryEffects } from './state/deal-admin-category.effects';
import { dealAdminCategoryReducer } from './state/deal-admin-category.reducer';

const components = [
  DealAdminCategoryComponent
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
  DealFilterModule,
  DealAdminCategoryRoutingModule,
];

const libs = [
  StoreModule.forFeature(dealAdminCategoryStateKey, dealAdminCategoryReducer),
  EffectsModule.forFeature([DealAdminCategoryEffects]),

  I18nDirective,
  PageTitleComponent,
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
export class DealAdminCategoryModule { }
