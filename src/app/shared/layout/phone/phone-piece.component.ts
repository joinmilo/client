import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-phone-piece',
  templateUrl: './phone-piece.component.html',
  styleUrls: ['./phone-piece.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class PhonePieceComponent {

  @Input()
  public phone?: Maybe<string>;

}
