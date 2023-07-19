import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/core/state/selectors/user.selectors';
import { Maybe } from 'src/schema/schema';
import { Comment } from '../../typings/comment';
import { CommentDialogComponent } from '../dialog/comment-dialog.component';

@Component({
  selector: 'app-comment-overview',
  templateUrl: './comment-overview.component.html',
  styleUrls: ['./comment-overview.component.scss']
})
export class CommentOverviewComponent implements OnDestroy {

  @Input()
  public backLabel?: string = 'back';

  @Input()
  public backRoute?: string[];
  
  @Input()
  public comments?: Maybe<Comment[]>;

  @Output()
  public enteredComment = new EventEmitter<string>();

  private destroy = new Subject<void>();

  constructor(
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router,
    public store: Store,
  ) { }

  public openDialog(): void {
    this.store.select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe(isAuthenticated => isAuthenticated
        ? this.dialog.open(CommentDialogComponent).afterClosed()
            .pipe(takeUntil(this.destroy))
            .subscribe(result => {
              if (result) {
                this.enteredComment.emit(result);
              }
            })
        : this.router.navigate(['/user', 'login-required']));
  }

  public routeBack(): void {
    this.backRoute
      ? this.router.navigate(this.backRoute)
      : this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}