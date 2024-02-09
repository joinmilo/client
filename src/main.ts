/* eslint-disable @typescript-eslint/no-explicit-any */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StaticProvider, enableProdMode } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { APP_AUTH_TOKENS, RefreshMutation, refreshKey } from 'ngx-cinlib/security';
import { AppModule } from './app/app.module';
import { graphqlApi } from './app/core/constants/url.constants';
import { environment } from './environments/environment';

// TODO:
// There is no way to use APP_INITIALIZER for initializing tokens because rendering happens synchronously.
// This means there will be a race condition if initial token is needed in other services such as AuthInterceptor
// or elsewhere. Potentially other mechanisms must be found.
// https://github.com/angular/angular/issues/23279#issuecomment-635096474
// https://stackoverflow.com/questions/43193049/app-settings-the-angular-way/62057120#62057120

function refreshListener(response: any): void {
  const token = JSON.parse(response.target.responseText) as FetchResult<RefreshMutation>;

  if (!token?.data?.refreshToken) {
    localStorage.removeItem(refreshKey);
  }

  bootstrap([
    { provide: APP_AUTH_TOKENS, useValue: token?.data?.refreshToken }
  ]);
}

function refreshFailed(): void {
  bootstrap([
    { provide: APP_AUTH_TOKENS, useValue: undefined }
  ]);
}

function bootstrap(extraProviders?: StaticProvider[] | undefined): void {
  platformBrowserDynamic(extraProviders)
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

if (environment.production) {
  enableProdMode();
}

const request = new XMLHttpRequest();
request.addEventListener('load', refreshListener);
request.addEventListener('error', refreshFailed);
request.open('POST', new URL(graphqlApi).href);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({
  operationName: 'refresh',
  variables: {
    refreshToken: localStorage.getItem(refreshKey)
  },
  query: `mutation refresh($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access
      refresh
    }
  }`
}));
