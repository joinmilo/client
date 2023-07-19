import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { ContestEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { PortalContestDetailsActions } from '../state/portal-contest-details.actions';
import { selectContestDetails } from '../state/portal-contest-details.selectors';

@Component({
  selector: 'app-portal-contest-details',
  templateUrl: './portal-contest-details.component.html',
  styleUrls: ['./portal-contest-details.component.scss']
})
export class PortalContestDetailsComponent implements OnInit, OnDestroy {

  public contest?: Maybe<ContestEntity>;

  public titleImage?: Maybe<MediaEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalContestDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectContestDetails)),
      takeUntil(this.destroy)
    ).subscribe(contest => {
      this.contest = contest;
      this.titleImage = contest?.uploads?.find(upload => upload?.title)?.media;
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}