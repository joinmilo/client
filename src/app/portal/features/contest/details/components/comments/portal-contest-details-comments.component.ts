import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { PortalContestDetailsActions } from '../../state/portal-contest-details.actions';
import { selectContestComments } from '../../state/portal-contest-details.selectors';

@Component({
  selector: 'app-portal-contest-details-comments',
  templateUrl: './portal-contest-details-comments.component.html',
  styleUrls: ['./portal-contest-details-comments.component.scss']
})
export class PortalContestDetailsCommentsComponent implements OnInit, OnDestroy {
  
  public comments = this.store.select(selectContestComments);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }
    
  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalContestDetailsActions.getComments(params.get(slug) || '')));
  }

  public saveComment(content: string): void {
    this.store.dispatch(PortalContestDetailsActions.saveContestComment({
      content,
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}