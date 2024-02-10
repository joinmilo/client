import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AuthorAdminOverviewRoutingModule } from './author-admin-overview-routing.module';
import { AuthorAdminOverviewComponent } from './component/author-admin-overview.component';
import { authorAdminOverviewStateKey } from './constants/author-admin-overview.constants';
import { AuthorAdminOverviewEffects } from './state/author-admin-overview.effects';
import { authorAdminOverviewReducer } from './state/author-admin-overview.reducer';


const components = [
  AuthorAdminOverviewComponent
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
  AuthorAdminOverviewRoutingModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(authorAdminOverviewStateKey, authorAdminOverviewReducer),
  EffectsModule.forFeature([AuthorAdminOverviewEffects]),

  PageTitleComponent,
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
export class AuthorAdminOverviewModule {
}
