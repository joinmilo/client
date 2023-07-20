import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Maybe } from 'graphql/jsutils/Maybe';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    FontAwesomeModule,
  ]
})
export class PriceComponent {

  @Input()
  public price?: Maybe<number>;
}
