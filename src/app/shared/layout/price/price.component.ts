import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  ]
})
export class PriceComponent {

  @Input()
  public price?: Maybe<number>;
}
