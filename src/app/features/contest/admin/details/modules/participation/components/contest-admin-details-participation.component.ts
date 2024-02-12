import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MediaViewerData } from 'ngx-cinlib/media/common';
import { MediaViewerComponent } from 'ngx-cinlib/media/elements';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { Subject, takeUntil } from 'rxjs';
import {
  ContestParticipationEntity,
  FilterSortPaginateInput,
  Maybe
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { TextViewerComponent } from 'src/app/shared/widgets/text/viewer/text-viewer.component';
import { ContestAdminDetailsParticipationActions } from '../state/contest-admin-details-participation.actions';
import { selectContestAdminDetailsParticipation } from '../state/contest-admin-details-participation.selectors';

@Component({
  selector: 'app-contest-admin-details-participation',
  templateUrl: './contest-admin-details-participation.component.html',
  styleUrls: ['./contest-admin-details-participation.component.scss'],
})
export class ContestAdminDetailsParticipationComponent
  implements OnInit, OnDestroy
{
  public participations = this.store.select(
    selectContestAdminDetailsParticipation
  );

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<ContestParticipationEntity>[] = [
    {
      icon: 'trophy',
      callback: (row) =>
        this.store.dispatch(
          ContestAdminDetailsParticipationActions.changePlacement(row)
        ),
      disable: (row) => !row?.approved,
      tooltipLabel: 'setPlacement',
      inlineEdit: true,
    },
    {
      icon: 'toggle-off',
      callback: (row) =>
        this.store.dispatch(
          ContestAdminDetailsParticipationActions.changeApproved(row)
        ),
      disable: (row) => !!row?.placement,
      tooltipLabel: 'toggleApprovedNotApproved',
    },
    {
      icon: 'trash',
      callback: (participation) =>
        this.store.dispatch(
          ContestAdminDetailsParticipationActions.deleteParticipation(
            participation
          )
        ),
      tooltipLabel: 'delete',
    },
  ];

  public columns: Column<ContestParticipationEntity>[] = [
    {
      field: 'userContext.user.firstName',
      label: 'firstName',
      sort: true,
    },
    {
      field: 'userContext.user.lastName',
      label: 'lastName',
      sort: true,
    },
    {
      field: 'approved',
      label: 'approved',
      type: 'BOOLEAN',
      sort: true,
    },
    {
      field: 'voteAmount',
      label: 'votes',
      sort: true,
    },
    {
      field: 'placement',
      label: 'placement',
      editable: true,
      sort: true,
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.parent?.params
      .pipe(takeUntil(this.destroy))
      .subscribe((params) => {
        this.slug = params[slug];
        this.updateParams(params[slug], {});
      });
  }

  public updateParams(slug: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(
      ContestAdminDetailsParticipationActions.updateParams(
        this.slug ?? slug,
        params
      )
    );
  }

  public rowClicked(contestParticipation: Maybe<ContestParticipationEntity>): void {
    
    contestParticipation?.textSubmission
      ? this.dialog.open(TextViewerComponent, {
          data: contestParticipation?.textSubmission,
          autoFocus: false,
          panelClass: 'media-dialog',
        })
      : this.dialog.open(MediaViewerComponent, {
          data: {
            media: [contestParticipation?.mediaSubmissions?.[0]?.media]
          } as MediaViewerData,
          autoFocus: false,
          panelClass: 'media-dialog',
        });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
