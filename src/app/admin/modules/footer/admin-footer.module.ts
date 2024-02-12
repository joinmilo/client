import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { FooterAppStoreComponent } from 'src/app/shared/layout/footer/appstore/footer-appstore.component';
import { AdminFooterComponent } from './component/admin-footer.component';
import { adminFooterStateKey } from './constants/admin-foter.constants';
import { AdminFooterEffects } from './state/admin-footer.effects';
import { adminFooterReducer } from './state/admin-footer.reducer';

const components = [
  AdminFooterComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatDividerModule,
];

const modules = [
  CoreModule,
  FooterAppStoreComponent,
];

const libs = [
  StoreModule.forFeature(adminFooterStateKey, adminFooterReducer),
  EffectsModule.forFeature([AdminFooterEffects]),

  I18nDirective,
  TranslatablePipe,
];

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
export class AdminFooterModule { }
