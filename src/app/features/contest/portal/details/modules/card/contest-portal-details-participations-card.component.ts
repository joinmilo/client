import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { TextElementComponent } from 'src/app/shared/widgets/text/element/text-element.component';

@Component({
  selector: 'app-contest-portal-details-participations-card',
  templateUrl: './contest-portal-details-participations-card.component.html',
  styleUrls: ['./contest-portal-details-participations-card.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MediaWidgetsModule,
    CoreModule,
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
