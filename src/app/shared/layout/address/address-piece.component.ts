import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressEntity, Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icon/icon.component';

@Component({
  selector: 'app-address-piece',
  templateUrl: './address-piece.component.html',
  styleUrls: ['./address-piece.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
  ]
})
export class AddressPieceComponent {

  @Input()
  public address?: Maybe<AddressEntity>;

  @Input()
  public link?: Maybe<string>;

  @Output()
  public addressClicked = new EventEmitter<Maybe<AddressEntity>>();

  public onClick(): void {
    if (this.address) {
      this.addressClicked.emit(this.address);
    }
  }
}
