import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    I18nDirective,
  ]
})
export class PriceComponent {

  @Input()
  public price?: Maybe<number>;
}
