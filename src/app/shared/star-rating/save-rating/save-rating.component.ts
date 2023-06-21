import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { UserContextEntity } from 'src/schema/schema';
import { SaveRatingDialogComponent } from '../save-rating-dialog/save-rating-dialog.component';

@Component({
  selector: 'app-save-rating',
  templateUrl: './save-rating.component.html',
  styleUrls: ['./save-rating.component.scss'],
})
export class SaveRatingComponent implements OnInit, OnDestroy {
  @Input() public rating = 0;

  public currentUser?: Maybe<UserContextEntity> | undefined;

  hoverIndex = 0;

  private destroy = new Subject<void>();

  @Input()
  eventId?: Maybe<string>;

  @Input()
  organisationId?: Maybe<string>;

  @Input()
  articleId?: Maybe<string>;

  constructor(public dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectCurrentUser)
    .pipe(takeUntil(this.destroy)).subscribe(user => this.currentUser = user);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SaveRatingDialogComponent, {
      width: '32rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        rating: this.rating,
        eventId: this.eventId,
        organisationId: this.organisationId,
        articleId: this.articleId,
        user: this.currentUser,
      }
    });
  }

  onHover(index: number) {
    this.hoverIndex = index;
    this.rating = index;
  }

  showIcon(index: number): IconPrefix {
    return (this.hoverIndex >= index + 1 ? 'fas' : 'far') as IconPrefix;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
