import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AddressEntity, Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-admin-settings-address-form',
  templateUrl: './admin-settings-address-form.component.html',
  styleUrls: ['./admin-settings-address-form.component.scss'],
})
export class AdminSettingsAddressFormComponent implements OnInit, OnDestroy {

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    address: [undefined as Maybe<AddressEntity>, [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.form.statusChanges
      .subscribe(status => console.log('status', status));
    // this.activatedRoute.params.pipe(
    //   tap(params => this.store.dispatch(AdminSettingsAddressActions.getAddress(params[id] || ''))),
    //   switchMap(() => this.store.select(selectEditableAddress)),
    //   takeUntil(this.destroy)
    // ).subscribe(entity => {
    //   if (entity) {
    //     this.form = this.fb.group({
    //       id: [suburb?.id],
    //       name: [suburb?.name, [Validators.required]],
    //       longitude: [suburb?.latitude?.toString(), [Validators.required, AppValidators.digitNumbers(),]],
    //       latitude: [suburb?.longitude?.toString(), [Validators.required, AppValidators.digitNumbers(),]],
    //     });
    //   }
    // });
  }

  public cancelled(): void {
    // this.store.dispatch(AdminSettingsSuburbActions.cancelled());
  }

  public saved(): void {
    // this.store.dispatch(AdminSettingsSuburbActions.save({
    //   id: this.form.value.id,
    //   name: this.form.value.name,
    //   longitude: Number(this.form.value.longitude?.replace(',', '.')),
    //   latitude: Number(this.form.value.latitude?.replace(',', '.'))
    // }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
