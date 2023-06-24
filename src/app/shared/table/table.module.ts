import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from '../card/card.module';
import { ShareModule } from '../share/share.module';
import { TableActionsComponent } from './components/actions/table-actions.component';
import { TableCardComponent } from './components/card/table-card.component';
import { TableDesktopComponent } from './components/desktop/table-desktop.component';
import { TableMobileComponent } from './components/mobile/table-mobile.component';
import { TablePaginatorComponent } from './components/paginator/table-paginator.component';
import { TableBooleanRowComponent } from './components/rows/table-boolean-row.component';
import { TableSortComponent } from './components/sort/table-sort.component';
import { TableComponent } from './components/table.component';
import { RowDirective } from './directives/table-row.directive';
import { TablePaginatorService } from './services/table-paginator.service';

const components = [
  TableComponent,
  TableActionsComponent,
  TableBooleanRowComponent,
  TableCardComponent,
  TableDesktopComponent,
  TableMobileComponent,
  TablePaginatorComponent,
  TableSortComponent,
];

const directives = [
  RowDirective,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
];

const materials = [
  MatCardModule,
  MatFormFieldModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
];

const modules = [
  CoreModule,
  CardModule,
  ShareModule,
];

const libs = [
  FontAwesomeModule,
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