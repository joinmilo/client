import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FavIconService } from './core/services/favicon.service';
import { SchemaService } from './core/services/schema.service';
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
export class AppComponent implements OnDestroy {

  @ViewChild(MatDrawer)
  public sidenav?: MatDrawer;

  private destroy = new Subject<void>();

  constructor(
    public browserTitleService: BrowserTitleService,
    public themeService: ThemeService,
    public favIconService: FavIconService,
    public schemaService: SchemaService,
    private store: Store,
  ) {

    this.store.select(selectAsideComponent)
      .pipe(takeUntil(this.destroy))
      .subscribe(component => component ? this.sidenav?.open() : this.sidenav?.close());
  }

  public removeAside(): void {
    this.store.dispatch(CoreActions.removeAsideComponent());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
