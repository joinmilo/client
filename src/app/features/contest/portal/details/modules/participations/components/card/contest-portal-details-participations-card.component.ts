import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-contest-portal-details-participations-card',
  templateUrl: './contest-portal-details-participations-card.component.html',
  styleUrls: ['./contest-portal-details-participations-card.component.scss'],
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
    public dialog: MatDialog,
  ) { }

}
