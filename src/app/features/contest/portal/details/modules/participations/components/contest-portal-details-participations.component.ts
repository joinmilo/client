import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, take, takeUntil, tap, withLatestFrom } from 'rxjs';
import {
  ContestParticipationEntity,
  UserContextEntity
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from 'src/app/core/state/selectors/user.selectors';
import { selectParams } from 'src/app/shared/widgets/table/state/table.selectors';
import {
  SortOption,
  SortPaginate,
} from 'src/app/shared/widgets/table/typings/table';
import { ActionInfo } from '../../../typings/actionInfo';
import { ContestPortalDetailsParticipationsActions } from '../state/contest-portal-details-participations.actions';
import {
  selectContestMaxVotes,
  selectContestParticipations,
  selectParticipationsTotal,
  selectUserVotes
} from '../state/contest-portal-details-participations.selectors';

@Component({
  selector: 'app-contest-portal-details-participations',
  templateUrl: './contest-portal-details-participations.component.html',
  styleUrls: ['./contest-portal-details-participations.component.scss'],
})
export class ContestPortalDetailsParticipationsComponent
  implements OnInit, OnDestroy
{
  public actionInfos?: ActionInfo[];

  public currentUser?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();

  public pageSizeOptions = [12, 24, 48, 96];

  public params = this.store.select(selectParams);

  private participations?: Maybe<Maybe<ContestParticipationEntity>[]>;

  public participationsTotal = this.store.select(selectParticipationsTotal);

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

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.store
      .select(selectCurrentUser)
      .subscribe((user) => (this.currentUser = user));

    this.activatedRoute.parent?.params
      .pipe(
        takeUntil(this.destroy),
        tap((params) => this.store.dispatch(ContestPortalDetailsParticipationsActions.getParticipations(params[slug] || ''))),
        switchMap(() => this.store.select(selectContestParticipations)),
        takeUntil(this.destroy),
        withLatestFrom(
          this.store.select(selectUserVotes),
          this.store.select(selectContestMaxVotes)))
      .subscribe(([participations, userVotes, maxVotes]) => {
        this.participations = participations;
        this.actionInfos = participations
          ?.filter((participation) => participation?.approved)
          ?.map((element) => this.retrieveActionInfos(element, userVotes, maxVotes));
      });
  }

  private retrieveActionInfos(
    element: Maybe<ContestParticipationEntity>, userVotes: number, maxVotes: Maybe<number>): ActionInfo {
    const actionInfo = {
      media: element?.mediaSubmissions?.[0]?.media,
      text: element?.textSubmission,
      disabled: false,
      label: 'vote',
    };

    if (maxVotes && maxVotes <= userVotes) {
      actionInfo.label = 'maxVotesReached';
      actionInfo.disabled = true;
    } else if (
      element?.contestVotes?.filter(
        (vote) => vote?.userContext?.id == this.currentUser?.id
      ).length != 0
    ) {
      actionInfo.label = 'allreadyVoted';
      actionInfo.disabled = true;
    }
    return actionInfo;
  }

  public changeSort(params: SortPaginate) {
    this.store.dispatch(
      ContestPortalDetailsParticipationsActions.updateParams(params)
    );
  }

  public updateParams(event: PageEvent) {
    this.store.dispatch(
      ContestPortalDetailsParticipationsActions.updateParams(
      {
        size: event.pageSize,
        page: event.pageIndex,
      })
    );
  }

  public saveVote(index: number) {
    this.store
      .select(selectIsAuthenticated)
      .pipe(take(1), takeUntil(this.destroy))
      .subscribe((isAuthenticated) =>
        isAuthenticated
          ? this.store.dispatch(
              ContestPortalDetailsParticipationsActions.saveVote({
                userContext: { id: this.currentUser?.id },
                contestParticipation: {
                  id: this.participations?.[index]?.id,
                  contest: {
                    id: this.participations?.[index]?.contest?.id
                  }
                },
              })
            )
          : this.store.dispatch(CoreUserActions.requireLogin())
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
