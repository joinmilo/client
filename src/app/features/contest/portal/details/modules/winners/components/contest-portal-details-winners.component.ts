import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import {
  ContestParticipationEntity
} from 'src/app/core/api/generated/schema';
import { ActionInfo } from '../../../typings/actionInfo';
import { ContestPortalDetailsWinnersActions } from '../state/contest-portal-details-winners.actions';
import { selectContestWinners } from '../state/contest-portal-details-winners.selectors';

@Component({
  selector: 'app-contest-portal-details-winners',
  templateUrl: './contest-portal-details-winners.component.html',
  styleUrls: ['./contest-portal-details-winners.component.scss'],
})
export class ContestPortalDetailsWinnersComponent implements OnInit {

  public actionInfos?: ActionInfo[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ContestPortalDetailsWinnersActions.getWinners());
    this.store.select(selectContestWinners).subscribe((winners) => {
      this.actionInfos = winners?.map((element) =>
        this.retrieveActionInfos(element)
      );
    });
  }

  retrieveActionInfos(
    element: Maybe<ContestParticipationEntity>
  ): ActionInfo {
    return {
      media: element?.mediaSubmissions?.[0]?.media,
      disabled: true,
      label: element?.placement?.toString(),
    };
  }
}
