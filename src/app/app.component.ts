import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavIconService } from './core/services/favicon.service';
import { ThemeService } from './core/services/theme.service';
import { BrowserTitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  //TODO: Find a place to init them properly
  constructor(
    public browserTitleService: BrowserTitleService,
    public themeService: ThemeService,
    public favIconService: FavIconService,
    public store: Store
  ) {
  }
}
