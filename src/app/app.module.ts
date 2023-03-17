/* eslint-disable  @typescript-eslint/no-explicit-any */
import { APP_INITIALIZER, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './core/services/auth.service';
import { ErrorInterceptor } from './core/services/error.interceptor';
import { ThemeService } from './core/services/theme.service';
import { GraphQLModule } from './graphql.module';

function init(authService: AuthService): () => Observable<unknown> {
  return () => authService.refresh();
}

const components: Type<any>[] = [
  AppComponent,
];

const framework: Type<any>[] = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule
];

const libs: any[] = [
  GraphQLModule,
  StoreModule.forRoot({}, {}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    logOnly: environment.production,
    autoPause: true,
  }),
  NgHcaptchaModule.forRoot({
    siteKey: '10000000-ffff-ffff-ffff-000000000001',
    languageCode: 'de'
  }),
];

const modules: Type<any>[] = [
  CoreModule
];

const providers: any[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: init,
    deps: [AuthService, ThemeService],
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
];


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...libs,
    ...modules,
  ],
  providers: [
    ...providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
