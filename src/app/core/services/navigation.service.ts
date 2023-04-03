import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = ['/'];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    });
  }

  public back(): void {
    this.history.pop();
    const next = this.history.pop();
    
    next 
      ? this.router.navigate([next])
      : this.router.navigate(['']);
  }

}