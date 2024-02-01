import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
  ]
})
export class SuccessComponent {

  @Input()
  public titleLabel?: string;

  @Input()
  public texts?: string[]

  @Input()
  public buttonLabel?: string

  @Input()
  public link?: string[]

}
