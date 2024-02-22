import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, NavigationNodeEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { DealAdminFormActions } from '../state/navigation-admin-form.actions';
import { selectDeal } from '../state/navigation-portal-form.selectors';


@Component({
  selector: 'app-navigation-admin-form',
  templateUrl: './navigation-admin-form.component.html',
  styleUrls: ['./navigation-admin-form.component.scss']
})
export class NavigationAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: [undefined as Maybe<string>],
    name: [undefined as Maybe<string>, [Validators.required]],
    content: [undefined as Maybe<string>, [Validators.required]],
  });

  public connectionForm = this.fb.group({
     conenctions: [[] as Maybe<NavigationNodeEntity>[]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

public ngOnInit(): void {

    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(DealAdminFormActions.getDeal(params[slug]))),
      switchMap(() => this.store.select(selectDeal)),
      filter(deal => !!deal?.id),
      takeUntil(this.destroy)
    ).subscribe(deal => {

      this.contentForm.patchValue({
        id: deal?.id,
        name: deal?.name,
        content: deal?.content,
      });

    });
  }

  public cancelled(): void {
    this.store.dispatch(DealAdminFormActions.cancelled());
  }

  public saved(): void {
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
