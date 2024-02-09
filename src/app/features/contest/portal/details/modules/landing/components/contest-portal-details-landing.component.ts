import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import {
  ContestEntity,
  Maybe,
  MediaEntity,
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { SchemaService } from 'src/app/core/services/schema.service';
import { participationFormRoute } from '../../../constants/contest-details.constant';
import { ContestPortalDetailsLandingActions } from '../state/portal-contest-details-landing.actions';
import { selectContestDetails, selectMaxParticipationsReached } from '../state/portal-contest-details-landing.selectors';

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
  
  public maxParticipationsReached = this.store.select(selectMaxParticipationsReached);

  public participationFormRoute = participationFormRoute;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private schemaService: SchemaService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) => this.store.dispatch(ContestPortalDetailsLandingActions.getDetails(params[slug] || ''))),
        switchMap(() => this.store.select(selectContestDetails)),
        takeUntil(this.destroy)
      )
      .subscribe((contest) => {
        this.contest = contest;
        this.mediaTitle = contest?.uploads
          ?.find((upload) => upload?.title)
          ?.media;

        this.media = contest?.uploads
          ?.filter((upload) => !upload?.card && !upload?.title)
          ?.map((contestMedia) => contestMedia?.media)
          ?.slice(0, 10) as MediaEntity[];

         this.contestEvaluated = contest?.participations?.filter(participation => participation?.placement).length != 0
         this.schemaService.createEntitySchema('ContestEntity', this.contest);
      });
  }

  public checkDatePassed(date: Date): boolean | null | undefined {
    const currentDate = new Date();
    return date ? new Date(date).getTime() > currentDate.getTime() : null;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
