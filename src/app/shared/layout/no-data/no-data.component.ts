import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    I18nDirective,
  ]
})
export class NoDataComponent {

  public images = { path: 'assets/no_data.svg' }

  @Input()
  public titleLabel?: string;

  @Input()
  public text?: string;
}
