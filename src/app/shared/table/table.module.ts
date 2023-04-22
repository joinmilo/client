import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TableActionsComponent } from './components/actions/table-actions.component';
import { TableDesktopComponent } from './components/desktop/table-desktop.component';
import { TableMobileComponent } from './components/mobile/table-mobile.component';
import { TableBooleanRowComponent } from './components/rows/table-boolean-row.component';
import { TableComponent } from './components/table.component';
import { RowDirective } from './directives/table-row.directive';

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
];

const modules = [
  CoreModule,
];

const libs = [
  FontAwesomeModule,
];

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
})
export class TableModule { }