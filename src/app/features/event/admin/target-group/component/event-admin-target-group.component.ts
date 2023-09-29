import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventTargetGroupEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { EventAdminTargetGroupActions } from '../state/event-admin-target-group.actions';
import { selectTargetGroupData } from '../state/event-admin-target-group.selectors';

@Component({
  selector: 'app-event-admin-target-group',
  templateUrl: './event-admin-target-group.component.html',
  styleUrls: ['./event-admin-target-group.component.scss']
})
export class EventAdminTargetGroupComponent {

  public targetGroups = this.store.select(selectTargetGroupData);

  public actions: RowAction<EventTargetGroupEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'form'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: targetGroup =>
        this.store.dispatch(EventAdminTargetGroupActions.deleteTargetGroup(targetGroup)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<EventTargetGroupEntity>[] = [
    {
      field: 'translatables.name',
      label: 'targetGroup',
      value: row => this.translationService.translatable(row.translatables, 'name')
    }
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminTargetGroupActions.updateParams(params));
  }

}