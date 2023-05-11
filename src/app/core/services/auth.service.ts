import { Injectable, Injector } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { EMPTY, Observable, Subscription, of, timer } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { LoginGQL, LoginMutation, Maybe, RefreshGQL, RefreshMutation, TokenDto } from 'src/schema/schema';
import { refreshKey } from '../constants/core.constants';
import { Token } from '../typings/token';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private accessTimer: Subscription = EMPTY.subscribe();
  private refreshTimer: Subscription = EMPTY.subscribe();

  public tokens?: Maybe<TokenDto>;

  constructor(
    private readonly injector: Injector,
  ) { }

  public refresh(): Observable<boolean> {
    const token = this.tokens?.refresh;
    if (token) {
      return this.callRefresh(token);
    }

    const tokenStr = localStorage.getItem(refreshKey);
    if (tokenStr) {
      const refreshToken: Token = JSON.parse(tokenStr);
      if (this.expired(refreshToken.exp)) {
        return this.callRefresh(tokenStr)
      }
    }

    this.logout();
    return EMPTY;
  }

  private callRefresh(refreshToken: string): Observable<boolean> {
    return this.injector.get<RefreshGQL>(RefreshGQL).mutate({ refreshToken }).pipe(
        map((response: FetchResult<RefreshMutation>) => response.data?.refreshToken as TokenDto),
        tap((tokens: TokenDto) => this.timers(tokens)),
        switchMap((tokens: TokenDto) => this.store(tokens)),
    )
  }

  private expired(exp: number | undefined): boolean {
    return !!(!exp || (exp * 1000 - Date.now()) < 0);
  }

  public login(email?: Maybe<string>, password?: Maybe<string>): Observable<boolean> {
    return email && password
      ? this.injector.get<LoginGQL>(LoginGQL).mutate({ email, password }).pipe(
          map((response: FetchResult<LoginMutation>) => response.data?.createToken as TokenDto),
          tap((tokens: TokenDto) => this.timers(tokens)),
          switchMap((tokens: TokenDto) => this.store(tokens)),
        )
      : EMPTY;
  }

  private store(tokens: TokenDto): Observable<boolean> {
    this.tokens = tokens;

    if (tokens?.refresh) {
      localStorage.setItem(refreshKey, atob(tokens.refresh.split('.')[1]));
      return of(true);
    }
    
    return EMPTY;
  }

  private timers(tokens: TokenDto): void {
    if (tokens.access) {
      this.accessTimer.unsubscribe();
      this.accessTimer = timer(this.expiration(tokens.access))
        .pipe(switchMap(() => this.refresh())).subscribe();
    }

    if (tokens.refresh) {
      this.refreshTimer.unsubscribe();
      // delay is necessary since timer does not work for large numbers
      // see, https://github.com/ReactiveX/rxjs/issues/3015
      this.refreshTimer = timer(0).pipe(delay(this.expiration(tokens.refresh)))
        .subscribe(() => this.logout());
    }
  }

  private expiration(tokenStr: string) {
    const token = JSON.parse(atob(tokenStr.split('.')[1]));
    return token.exp * 1000 - Date.now();
  }

  public logout(): void {
    this.accessTimer.unsubscribe();
    this.refreshTimer.unsubscribe();
    this.tokens = undefined;
  }

  public isAuthenticated(): boolean {
    return !!this.tokens;
  }
}
