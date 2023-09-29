import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { EventAdminTargetGroupFormActions } from '../state/event-admin-target-group-form.actions';
import { selectEditableEventTargetGroup } from '../state/event-admin-target-group-form.selectors';


@Component({
  selector: 'app-event-admin-target-group-form',
  templateUrl: './event-admin-target-group-form.component.html',
  styleUrls: ['./event-admin-target-group-form.component.scss']
})
export class EventAdminTargetGroupFormComponent implements OnInit, OnDestroy {

  public targetGroupForm = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[id]),
      tap((params) => this.store.dispatch(EventAdminTargetGroupFormActions.getTargetGroup(params[id]))),
      switchMap(() => this.store.select(selectEditableEventTargetGroup)),
      filter(targetGroup => !!targetGroup),
      take(1)
    ).subscribe(targetGroup => {
      this.targetGroupForm = this.fb.group({
        id: [targetGroup?.id],
        name: [targetGroup?.name, [Validators.required]],
      });
    });

      
  }

  public cancelled(): void {
    this.store.dispatch(EventAdminTargetGroupFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(EventAdminTargetGroupFormActions.save({
      id: this.targetGroupForm.value.id,
      name: this.targetGroupForm.value.name,
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(EventAdminTargetGroupFormActions.cancelled());
    this.destroy.next();
    this.destroy.complete();

  }


}