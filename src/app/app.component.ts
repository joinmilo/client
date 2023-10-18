import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { FavIconService } from './core/services/favicon.service';
import { ThemeService } from './core/services/theme.service';
import { BrowserTitleService } from './core/services/title.service';
import { CoreActions } from './core/state/actions/core.actions';
import { selectAsideComponent } from './core/state/selectors/core.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild(MatDrawer) sidenav?: MatDrawer;

  private previousUrl?: Maybe<string>;
  private currentUrl?: Maybe<string>;

  constructor(
    public browserTitleService: BrowserTitleService,
    public themeService: ThemeService,
    public favIconService: FavIconService,
    private store: Store,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.store.select(selectAsideComponent)
      .subscribe(component => component ? this.sidenav?.open() : this.sidenav?.close());

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url.split('?')[0];
        console.log(this.previousUrl);
        console.log(this.currentUrl);
        if (this.previousUrl !== this.currentUrl) {

          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }

  public removeAside(): void {
    this.store.dispatch(CoreActions.removeAsideComponent());
  }
}
