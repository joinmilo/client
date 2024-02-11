import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleFilterModule } from 'src/app/shared/filter/article/article-filter.module';
import { OrganisationAdminApprovalOverviewComponent } from './component/organisation-admin-approval-overview.component';
import { organisationAdminApprovalOverviewStateKey } from './constants/organisation-admin-approval-overview.constants';
import { OrganisationAdminApprovalOverviewRoutingModule } from './organisation-admin-approval-overview-routing.module';
import { OrganisationAdminOverviewEffects } from './state/organisation-admin-approval-overview.effects';
import { guestArticleAdminOverviewReducer } from './state/organisation-admin-approval-overview.reducer';

const components = [
  OrganisationAdminApprovalOverviewComponent
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
  ArticleFilterModule,
  OrganisationAdminApprovalOverviewRoutingModule,
];

const libs = [
  StoreModule.forFeature(organisationAdminApprovalOverviewStateKey, guestArticleAdminOverviewReducer),
  EffectsModule.forFeature([OrganisationAdminOverviewEffects]),

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
export class OrganisationAdminApprovalOverviewModule { }
