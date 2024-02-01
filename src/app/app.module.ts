import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SidenavContainerComponent } from 'ngx-cinlib/modals/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { LanguageInterceptor } from './core/interceptors/language.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { GraphQLModule } from './graphql.module';
import { PortalModule } from './portal/portal.module';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

const components = [
  AppComponent,
];

const framework = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule,
];

const libs = [
  GraphQLModule,
  StoreModule.forRoot({}, {
    runtimeChecks: {
      strictActionImmutability: false,
      strictActionSerializability: false,
      strictActionTypeUniqueness: false,
      strictActionWithinNgZone: false,
      strictStateImmutability: false,
      strictStateSerializability: false,
    }
  }),
  StoreDevtoolsModule.instrument({
    logOnly: isDevMode(),
    autoPause: true,
  }),
  EffectsModule.forRoot([]),
  //TODO: https://github.com/swimlane/ngx-charts/issues/1733
  NgxChartsModule,

  SidenavContainerComponent,
];

//TODO: Breaks scrolling Angular:
// https://github.com/angular/angular/issues/35759
const materials = [
  MatAutocompleteModule,
  MatMenuModule,
];

const modules = [
  CoreModule,
  PortalModule
];

const providers = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptor,
    multi: true,
  },
  {
    provide: LOCALE_ID,
    useValue: 'de-DE'
  },
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  providers: [
    ...providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
