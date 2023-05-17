import { Injectable, Injector } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { EMPTY, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LoginGQL, LoginMutation, Maybe, RefreshGQL, RefreshMutation, TokenDto } from 'src/schema/schema';
import { refreshKey } from '../constants/core.constants';
import { Token } from '../typings/token';

@Injectable({ providedIn: 'root' })
export class AuthService {

  public tokens?: Maybe<TokenDto>;

  constructor(
    private readonly injector: Injector,
  ) { }

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
      tap((tokens: TokenDto) => this.store(tokens)),
    );
  }

  private expired(exp: number | undefined): boolean {
    return !!(!exp || (exp * 1000 - Date.now()) < 0);
  }

  public login(email: string, password: string): Observable<TokenDto> {
    return this.injector.get<LoginGQL>(LoginGQL).mutate({ email, password }).pipe(
      map((response: FetchResult<LoginMutation>) => response.data?.createToken as TokenDto),
      filter(tokens => !!tokens),
      tap((tokens: TokenDto) => this.store(tokens)),
    );
  }

  private store(tokens: TokenDto): void {
    this.tokens = tokens;

    tokens.refresh
      && localStorage.setItem(refreshKey, tokens.refresh)
  }

  public clear(): void {
    this.tokens = undefined;
    localStorage.removeItem(refreshKey);
  }

}
