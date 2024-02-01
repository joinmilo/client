import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from 'ngx-cinlib/icons';
import { Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-phone-piece',
  templateUrl: './phone-piece.component.html',
  styleUrls: ['./phone-piece.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
  ]
})
export class PhonePieceComponent {

  @Input()
  public phone?: Maybe<string>;

}
