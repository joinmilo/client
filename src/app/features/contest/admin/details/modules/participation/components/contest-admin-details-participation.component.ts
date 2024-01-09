import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ContestParticipationEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { ContestAdminDetailsParticipationActions } from '../state/contest-admin-details-participation.actions';
import { selectContestAdminDetailsParticipation } from '../state/contest-admin-details-participation.selectors';

@Component({
  selector: 'app-contest-admin-details-participation',
  templateUrl: './contest-admin-details-participation.component.html',
  styleUrls: ['./contest-admin-details-participation.component.scss']
})
export class ContestAdminDetailsParticipationComponent implements OnInit, OnDestroy {

  public participations = this.store.select(selectContestAdminDetailsParticipation);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<ContestParticipationEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row => this.store.dispatch(ContestAdminDetailsParticipationActions.saveParticipation(row)),
      disable: row => !!row?.placement,
      tooltipLabel: 'edit',
      inlineEdit: true
    },
    {
      icon: 'toggle-off',
      callback: participation =>
      this.store.dispatch(ContestAdminDetailsParticipationActions.saveParticipation(participation)),
      tooltipLabel: 'toggleApprovedNotApproved'
    },
    {
      icon: 'trash',
      callback: participation =>
        this.store.dispatch(ContestAdminDetailsParticipationActions.deleteParticipation(participation)),
      tooltipLabel: 'delete'
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
      sort: true
    },
    {
      field: 'placement',
      label: 'placement',
      editable: true,
      sort: true
    },
    {
      field: 'translatables.textSubmission',
      label: 'content',
      value: row => this.translationService.translatable(row.translatables, 'textSubmission')
    },
    // {
    //   field: 'mediaSubmissions?.[0]?.media',
    //   label: 'file',
    //   type: 'MEDIA',
    // },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.slug = params[slug],
        this.updateParams(params[slug], {})
    }
    )
  }

  public updateParams(slug: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(ContestAdminDetailsParticipationActions.updateParams(this.slug ?? slug, params ));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}