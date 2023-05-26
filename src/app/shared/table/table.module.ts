import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TableActionsComponent } from './components/actions/table-actions.component';
import { TableDesktopComponent } from './components/desktop/table-desktop.component';
import { TableMobileComponent } from './components/mobile/table-mobile.component';
import { TableBooleanRowComponent } from './components/rows/table-boolean-row.component';
import { TableComponent } from './components/table.component';
import { tableStateKey } from './constants/table.constants';
import { RowDirective } from './directives/table-row.directive';
import { TablePaginatorService } from './services/table-paginator.service';
import { tableReducer } from './state/table.reducer';

const components = [
  TableComponent,
  TableActionsComponent,
  TableBooleanRowComponent,
  TableDesktopComponent,
  TableMobileComponent,
];

const directives = [
  RowDirective,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(tableStateKey, tableReducer),
];

const providers = [
  {
    provide: MatPaginatorIntl,
    useClass: TablePaginatorService,
  }
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
    ...directives,
  ],
  providers: [
    ...providers
  ]
})
export class TableModule { }