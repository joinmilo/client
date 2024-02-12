import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { AuthService } from 'ngx-cinlib/security';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { EventTargetGroupEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { Privilege } from 'src/app/core/typings/privilege';
import { EventAdminTargetGroupActions } from '../state/event-admin-target-group.actions';
import { selectTargetGroupData } from '../state/event-admin-target-group.selectors';

@Component({
  selector: 'app-event-admin-target-group',
  templateUrl: './event-admin-target-group.component.html',
  styleUrls: ['./event-admin-target-group.component.scss']
})
export class EventAdminTargetGroupComponent implements OnInit{

  public targetGroups = this.store.select(selectTargetGroupData);

  public isEventAdmin = false;

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
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public ngOnInit(): void {
    this.checkPrivileges();
  }
  
  private checkPrivileges(): void {
    this.isEventAdmin = this.authService.hasAnyPrivileges<Privilege>(['events_admin']);
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminTargetGroupActions.updateParams(params));
  }

}