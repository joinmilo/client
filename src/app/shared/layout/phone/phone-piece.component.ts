import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { IconComponent } from '../../widgets/icon/icon.component';

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
