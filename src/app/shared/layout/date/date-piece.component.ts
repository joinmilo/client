import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icons/icon.component';

@Component({
  selector: 'app-date-piece',
  templateUrl: './date-piece.component.html',
  styleUrls: ['./date-piece.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
  ]
})
export class DatePieceComponent {

  @Input()
  public date?: Maybe<string>;

  @Input()
  public dateTime? = true;

  @Input()
  public label = 'date';

}
