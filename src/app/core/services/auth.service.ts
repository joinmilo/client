import { Inject, Injectable, Injector } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Maybe, TokenDto } from 'src/app/core/api/generated/schema';
import { LoginGQL, LoginMutation } from '../api/generated/login.mutation.generated';
import { RefreshGQL, RefreshMutation } from '../api/generated/refresh.mutation.generated';
import { refreshKey } from '../constants/core.constants';
import { APP_AUTH_TOKENS } from '../constants/inject-tokens';
import { CoreUserActions } from '../state/actions/core-user.actions';
import { Token } from '../typings/token';

@Injectable({ 
  providedIn: 'root'
 })
export class AuthService {

  public tokens?: Maybe<TokenDto>;

  constructor(
    private readonly injector: Injector,
    @Inject(APP_AUTH_TOKENS)
    public initTokens: TokenDto,
    private store: Store,
  ) {
    this.tokens = { ...initTokens };

    if (!this.tokens.refresh) {
      this.store.dispatch(CoreUserActions.logout());
    }
  }

  public refresh(): Observable<TokenDto> {
    const token = this.tokens?.refresh;
    if (token) {
      return this.callRefresh(token);
    }

    const tokenStr = localStorage.getItem(refreshKey);
    if (tokenStr) {
      const refreshToken: Token = JSON.parse(
        window.atob(tokenStr.split('.')[1])
      );
      
      if (!this.expired(refreshToken.exp)) {
        return this.callRefresh(tokenStr)
      }
    }
    
    this.clear();
    return EMPTY;
  }

  private callRefresh(refreshToken: string): Observable<TokenDto> {
    return this.injector.get<RefreshGQL>(RefreshGQL).mutate({ refreshToken }).pipe(
      map((response: FetchResult<RefreshMutation>) => response.data?.refreshToken as TokenDto),
      tap((tokens: TokenDto) => this.storeTokens(tokens)),
    );
  }

  private expired(exp: number | undefined): boolean {
    return !!(!exp || (exp * 1000 - Date.now()) < 0);
  }

  public login(email: string, password: string): Observable<TokenDto> {
    return this.injector.get<LoginGQL>(LoginGQL).mutate({ email, password }).pipe(
      map((response: FetchResult<LoginMutation>) => response.data?.createToken as TokenDto),
      filter(tokens => !!tokens),
      tap((tokens: TokenDto) => this.storeTokens(tokens)),
    );
  }

  private storeTokens(tokens: TokenDto): void {
    this.tokens = tokens;

    tokens.refresh
      && localStorage.setItem(refreshKey, tokens.refresh)
  }

  public clear(): void {
    this.tokens = undefined;
    localStorage.removeItem(refreshKey);
    this.store.dispatch(CoreUserActions.logout());
    
  }

}
