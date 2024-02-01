import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ActionInfo } from '../../../typings/actionInfo';
import { ContestPortalDetailsWinnersActions } from '../state/contest-portal-details-winners.actions';
import { selectContestWinners } from '../state/contest-portal-details-winners.selectors';

@Component({
  selector: 'app-contest-portal-details-winners',
  templateUrl: './contest-portal-details-winners.component.html',
  styleUrls: ['./contest-portal-details-winners.component.scss'],
})
export class ContestPortalDetailsWinnersComponent implements OnInit, OnDestroy {
  public winners?: ActionInfo[];

  public firstPlaced?: ActionInfo[];

  private destroy = new Subject<void>();

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) =>
          this.store.dispatch(
            ContestPortalDetailsWinnersActions.getWinners(params[slug] || '')
          )
        ),
        switchMap(() => this.store.select(selectContestWinners)),
        takeUntil(this.destroy)
      )
      .subscribe((winners) => {
        this.winners = winners
          ?.filter((winner) => winner.placement != 1)
          ?.map((element) => this.retrieveActionInfos(element));
        this.firstPlaced = winners
          ?.filter((winner) => winner.placement == 1)
          ?.map((element) => this.retrieveActionInfos(element));
      });
  }

  retrieveActionInfos(element: Maybe<ContestParticipationEntity>): ActionInfo {
    return {
      media: element?.mediaSubmissions?.[0]?.media,
      disabled: true,
      label: element?.placement?.toString(),
    };
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
