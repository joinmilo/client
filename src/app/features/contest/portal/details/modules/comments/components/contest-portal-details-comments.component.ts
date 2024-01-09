import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ContestPortalDetailsLandingActions } from '../../landing/state/portal-contest-details-landing.actions';
import { ContestPortalDetailsCommentsActions } from '../state/contest-portal-details-comments.actions';
import { selectContestComments } from '../state/contest-portal-details-comments.selectors';

@Component({
  selector: 'app-contest-portal-details-comments',
  templateUrl: './contest-portal-details-comments.component.html',
  styleUrls: ['./contest-portal-details-comments.component.scss']
})
export class ContestPortalDetailsCommentsComponent implements OnInit, OnDestroy {
  
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
        ContestPortalDetailsCommentsActions.getComments(params.get(slug) || '')));
  }

  public saveComment(content: string): void {
    this.store.dispatch(ContestPortalDetailsLandingActions.saveContestComment({
      content,
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}