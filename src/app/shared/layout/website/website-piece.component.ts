import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from 'ngx-cinlib/icons';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';

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
