import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icon/icon.component';

@Component({
  selector: 'app-website-piece',
  templateUrl: './website-piece.component.html',
  styleUrls: ['./website-piece.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
  ]
})
export class WebsitePieceComponent {

  @Input()
  public website?: Maybe<string>;
}
