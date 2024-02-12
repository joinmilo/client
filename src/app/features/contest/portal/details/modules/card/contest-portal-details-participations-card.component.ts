import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { MediaElementComponent } from 'ngx-cinlib/media/elements';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { TextElementComponent } from 'src/app/shared/widgets/text/element/text-element.component';

@Component({
  selector: 'app-contest-portal-details-participations-card',
  templateUrl: './contest-portal-details-participations-card.component.html',
  styleUrls: ['./contest-portal-details-participations-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    I18nDirective,
    MatButtonModule,
    MatCardModule,
    MediaElementComponent,
    TextElementComponent,
  ],
})
export class ContestPortalDetailsParticipationsCardComponent {

  @Input()
  public actionLabel?: Maybe<string>;

  @Input()
  public actionDisabled?: Maybe<boolean>;

  @Input()
  public media?: Maybe<MediaEntity>;

  @Input()
  public text?: Maybe<string>;

  @Output()
  public action = new EventEmitter<void>();

  constructor(
    public dialog: MatDialog
  ) {}
}
