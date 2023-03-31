import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTheme } from '../state/core.selectors';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  constructor(
    private store: Store,
  ) {
    this.store.select(selectTheme)
      .subscribe(theme => theme?.variables?.forEach(variable =>
        document.documentElement.style.setProperty(
          variable?.key as string, variable?.value as string)))
  }
  
}
