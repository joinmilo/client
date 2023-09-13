import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
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

  @ViewChild(MatDrawer)
  public sidenav?: MatDrawer;

  //TODO: Find a place to init them properly
  constructor(
    public browserTitleService: BrowserTitleService,
    public themeService: ThemeService,
    public favIconService: FavIconService,

    private store: Store
  ) {
    this.store.select(selectAsideComponent)
      .subscribe(component => component
        ? this.sidenav?.open()
        : this.sidenav?.close());
  }

  public removeAside(): void  {
    this.store.dispatch(CoreActions.removeAsideComponent());
  }


}
