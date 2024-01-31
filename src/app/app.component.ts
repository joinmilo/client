import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FavIconService } from './core/services/favicon.service';
import { SchemaService } from './core/services/schema.service';
import { ThemeService } from './core/services/theme.service';
import { BrowserTitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(
    public browserTitleService: BrowserTitleService,
    public themeService: ThemeService,
    public favIconService: FavIconService,
    public schemaService: SchemaService,
  ) { }

}
