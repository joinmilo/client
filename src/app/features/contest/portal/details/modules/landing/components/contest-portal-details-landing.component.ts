import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import {
  ContestEntity,
  Maybe,
  MediaEntity,
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from 'src/app/core/state/selectors/user.selectors';
import { ContestPortalDetailsLandingActions } from '../state/portal-contest-details-landing.actions';
import { selectContestDetails } from '../state/portal-contest-details-landing.selectors';

@Component({
  selector: 'app-contest-portal-details-landing',
  templateUrl: './contest-portal-details-landing.component.html',
  styleUrls: ['./contest-portal-details-landing.component.scss'],
})
export class ContestPortalDetailsLandingComponent implements OnInit, OnDestroy {
  public contest?: Maybe<ContestEntity>;

  public mediaTitle?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  public contestEvaluated?: Maybe<boolean>;

  private destroy = new Subject<void>();

  public maxParticipationsReached = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) =>
          this.store.dispatch(
            ContestPortalDetailsLandingActions.getDetails(params[slug] || '')
          )
        ),
        switchMap(() => this.store.select(selectContestDetails)),
        takeUntil(this.destroy)
      )
      .subscribe((contest) => {
        this.contest = contest;
        this.mediaTitle = contest?.uploads?.find(
          (upload) => upload?.title
        )?.media;

        this.media = contest?.uploads
          ?.filter((upload) => !upload?.card && !upload?.title)
          ?.map((contestMedia) => contestMedia?.media)
          ?.slice(0, 10) as MediaEntity[];
         this.contestEvaluated = contest?.participations?.filter(participation => participation?.placement).length != 0

          this.checkDisabled();
      });
  }

  checkDatePassed(date: Date): boolean | null | undefined {
    const currentDate = new Date();
    return date ? new Date(date).getTime() > currentDate.getTime() : null;
  }

  isAuthenticated() {
    this.store
      .select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe((isAuthenticated) =>
        isAuthenticated
          ? this.router.navigate(['participation-form'], {
              relativeTo: this.activatedRoute,
            })
          : this.store.dispatch(CoreUserActions.requireLogin())
      );
  }

  checkDisabled(): void {
    this.store.select(selectCurrentUser).subscribe((user) => {
      this.maxParticipationsReached =
        (this.contest?.maxParticipations ?? 0) <=
        (this.contest?.participations?.filter(
          (participation) => participation?.userContext?.id === user?.id
        )?.length ?? 0);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
