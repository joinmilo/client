import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import {
  ContestEntity,
  ContestParticipationEntity,
  UserContextEntity,
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { selectParams } from 'src/app/shared/widgets/table/state/table.selectors';
import {
  SortOption,
  SortPaginate,
} from 'src/app/shared/widgets/table/typings/table';
import { ActionInfo } from '../../../typings/actionInfo';
import { ContestPortalDetailsLandingActions } from '../../landing/state/portal-contest-details-landing.actions';
import { selectContestDetails } from '../../landing/state/portal-contest-details-landing.selectors';
import { ContestPortalDetailsParticipationsActions } from '../state/contest-portal-details-participations.actions';
import {
  selectContestParticipations,
  selectParticipationsTotal,
} from '../state/contest-portal-details-participations.selectors';

@Component({
  selector: 'app-contst-portal-details-participations',
  templateUrl: './contest-portal-details-participations.component.html',
  styleUrls: ['./contest-portal-details-participations.component.scss'],
})
export class ContestPortalDetailsParticipationsComponent
  implements OnInit, OnDestroy
{
  public sortOptions: SortOption[] = [
    {
      label: 'created',
      field: 'created',
    },
    {
      label: 'created',
      field: 'created',
      dir: 'desc',
    },
  ];

  public actionInfos?: ActionInfo[];

  public currentUser?: Maybe<UserContextEntity>;
  
  public participationsTotal = this.store.select(selectParticipationsTotal);
  
  public params = this.store.select(selectParams);
  
  public pageSizeOptions = [12, 24, 48, 96];

  private contest?: Maybe<ContestEntity>;
  
  private destroy = new Subject<void>();
  
  private participations?: Maybe<Maybe<ContestParticipationEntity>[]>;

  private userVotes?: Maybe<number>;
  

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}
  

  ngOnInit(): void {
    this.store
      .select(selectCurrentUser)
      .subscribe((user) => (this.currentUser = user));

    this.store.dispatch(
      ContestPortalDetailsParticipationsActions.updateParams({
        page: 0,
        size: 12,
      })
    );

    this.store
      .select(selectContestParticipations)
      .pipe(takeUntil(this.destroy))
      .subscribe((participations) => {
        this.participations = participations;
        this.userVotes = this.participations
          ?.map(
            (participation) =>
              participation?.contestVotes?.filter(
                (vote) => vote?.userContext?.id === this.currentUser?.id
              )?.length ?? 0
          )
          .reduce((acc, count) => acc + count, 0);
        this.actionInfos = participations?.map((element) =>
          this.retrieveActionInfos(element)
        );
      });

    this.activatedRoute.parent?.params
      .pipe(
        tap((params) =>
          this.store.dispatch(
            ContestPortalDetailsLandingActions.getDetails(params[slug] || '')
          )
        ),
        switchMap(() => this.store.select(selectContestDetails)),
        takeUntil(this.destroy)
      )
      .subscribe((contest) => (this.contest = contest));
  }

  retrieveActionInfos(element: Maybe<ContestParticipationEntity>): ActionInfo {
    const media = element?.mediaSubmissions?.[0]?.media;
    return (this.contest?.maxVotes ?? 0) <= (this.userVotes ?? 0)
      ? {
          media: media,
          disabled: true,
          label: 'maxVotesReached',
        }
      : element?.contestVotes?.filter(
          (vote) => vote?.userContext?.id == this.currentUser?.id
        ).length != 0
      ? { media: media, disabled: true, label: 'allreadyVoted' }
      : { media: media, disabled: false, label: 'vote' };
  }

  public changeSort(params: SortPaginate) {
    this.store.dispatch(
      ContestPortalDetailsParticipationsActions.updateParams(params)
    );
  }

  public updateParams(event: PageEvent) {
    this.store.dispatch(
      ContestPortalDetailsParticipationsActions.updateParams({
        size: event.pageSize,
        page: event.pageIndex,
      })
    );
  }

  edit(index: number) {
    this.store.dispatch(
      ContestPortalDetailsParticipationsActions.saveVote({
        userContext: { id: this.currentUser?.id },
        contestParticipation: {
          id: this.participations?.[index]?.id,
        },
      })
    );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
