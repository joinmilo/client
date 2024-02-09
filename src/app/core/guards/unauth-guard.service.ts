import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ngx-cinlib/security';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuardService {
  
  public canActivate(): boolean {
    const isUnauthenticated = !!this.authService.tokens?.access

    if (isUnauthenticated) {
      this.router.navigate(['']);
    }

    return !isUnauthenticated;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
}