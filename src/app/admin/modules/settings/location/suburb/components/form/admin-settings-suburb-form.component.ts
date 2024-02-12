import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CinValidators } from 'ngx-cinlib/forms/validators';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { id } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsSuburbActions } from '../../state/admin-settings-suburb.actions';
import { selectEditableSuburb } from '../../state/admin-settings-suburb.selectors';

@Component({
  selector: 'app-admin-settings-suburb-form',
  templateUrl: './admin-settings-suburb-form.component.html',
  styleUrls: ['./admin-settings-suburb-form.component.scss'],
})
export class AdminSettingsSuburbFormComponent implements OnInit, OnDestroy {

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    name: ['' as Maybe<string>, [Validators.required]],
    longitude: ['' as Maybe<string>, [Validators.required, CinValidators.decimal,]],
    latitude: ['' as Maybe<string>, [Validators.required, CinValidators.decimal,]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => !!params[id]),
      tap(params => this.store.dispatch(AdminSettingsSuburbActions.getSuburb(params[id]))),
      switchMap(() => this.store.select(selectEditableSuburb)),
      filter(suburb => !!suburb),
      take(1)
    ).subscribe(suburb =>
      this.form = this.fb.group({
        id: [suburb?.id],
        name: [suburb?.name, [Validators.required]],
        longitude: [suburb?.longitude?.toString(), [Validators.required, CinValidators.decimal,]],
        latitude: [suburb?.latitude?.toString(), [Validators.required, CinValidators.decimal,]],
      }));
  }

  public cancelled(): void {
    this.store.dispatch(AdminSettingsSuburbActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(AdminSettingsSuburbActions.save({
      id: this.form.value.id,
      name: this.form.value.name,
      longitude: Number(this.form.value.longitude?.replace(',', '.')),
      latitude: Number(this.form.value.latitude?.replace(',', '.'))
    }));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(AdminSettingsSuburbActions.cancelled());
    this.destroy.next();
    this.destroy.complete();
  }

}
