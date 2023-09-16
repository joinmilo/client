import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventCommentEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Period } from 'src/app/core/typings/period';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { EventAdminDetailsCommentsActions } from '../state/event-admin-details-comments.actions';
import { selectEventAdminDetailsComments } from '../state/event-admin-details-comments.selectors';
import { slug } from './../../../../../../../core/constants/queryparam.constants';



@Component({
  selector: 'app-event-admin-details-comments',
  templateUrl: './event-admin-details-comments.component.html',
  styleUrls: ['./event-admin-details-comments.component.scss']
})
export class EventAdminDetailsCommentsComponent implements OnInit, OnDestroy {

  public comments = this.store.select(selectEventAdminDetailsComments);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<EventCommentEntity>[] = [
    {
      icon: 'trash',
      callback: comment =>
        this.store.dispatch(EventAdminDetailsCommentsActions.deleteComment(comment)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<EventCommentEntity>[] = [
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
      field: 'created',
      label: 'created',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'translatables.content',
      label: 'content',
      type: row => this.translationService.translatable(row.translatables, 'content')
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private translationService: TranslationService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.slug = params[slug],
        this.updateParams(
          params[slug],
          {
            startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
            endDate: new Date()
          },)
    }
    )
  }

  public updateParams(slug?: Maybe<string>, period?: Period, params?: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminDetailsCommentsActions.updateParams(this.slug ?? slug, period, params));
  }

  public initPeriod: Period = {
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date()
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}