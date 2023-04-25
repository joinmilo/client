import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { PortalMenuModule } from '../menu/portal-menu.module';
import { PortalSearchModule } from '../search/search.module';
import { PortalHeaderBackComponent } from './components/back/portal-header-back.component';
import { PortalHeaderDesktopComponent } from './components/desktop/portal-header-desktop.component';
import { PortalHeaderComponent } from './components/header/portal-header.component';
import { PortalHeaderLanguageComponent } from './components/language/portal-header-language.component';
import { PortalHeaderMobileComponent } from './components/mobile/portal-header-mobile.component';
import { PortalHeaderUserComponent } from './components/user/portal-header-user.component';

const components = [
  PortalHeaderComponent,
  PortalHeaderBackComponent,
  PortalHeaderDesktopComponent,
  PortalHeaderMobileComponent,
  PortalHeaderLanguageComponent,
  PortalHeaderUserComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const materials = [
  MatAutocompleteModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  PortalMenuModule,
  PortalSearchModule,
];

const libs = [
  FontAwesomeModule,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
})
export class PortalHeaderModule { }
