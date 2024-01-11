import { Component, EventEmitter, OnDestroy, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { SolidIconsType } from 'src/app/shared/widgets/icon/typings/solid-icons';

@Component({
  selector: 'app-admin-settings-page-menu-form',
  templateUrl: './admin-settings-page-menu-form.component.html',
  styleUrls: ['./admin-settings-page-menu-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AdminSettingsPageMenuFormComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AdminSettingsPageMenuFormComponent
    },
  ]
})
export class AdminSettingsPageMenuFormComponent implements ControlValueAccessor, Validator, OnDestroy {

  @Output()
  public deleted = new EventEmitter<void>();

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    icon: [undefined as Maybe<SolidIconsType>, [Validators.required]],
    name: ['' as Maybe<string>, [Validators.required]],
    shortDescription: ['' as Maybe<string>],
    order: [undefined as Maybe<number>],
    parent: [undefined as Maybe<MenuItemEntity>],
  });

  private onChange?: (menuItem: Maybe<MenuItemEntity>) => void;
  private onTouch?: () => void;
  private onValidate?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private translationService: TranslationService,
  ) {
    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy)
      ).subscribe(value => {
        this.onTouch?.();
        this.onChange?.({
          id: value.id,
          icon: value.icon,
          name: value.name,
          shortDescription: value.shortDescription,
          order: value.order,
          parent: {
            id: value.parent?.id
          }
        });
        this.onValidate?.();
      })
  }

  public onDelete(): void {
    this.dialog.open(ConfirmDeleteComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe((confirmed: boolean) => {
        this.onTouch?.();

        if (confirmed) {
          this.deleted.emit();
        }
      });
  }   

  public writeValue(menuItem: MenuItemEntity): void {
    this.form.patchValue({
      id: menuItem.id,
      icon: menuItem.icon as Maybe<SolidIconsType>,
      order: menuItem.order,
      parent: menuItem.parent
    }, { emitEvent: false });

    this.translationService.translatable(menuItem, 'name')
      .pipe(takeUntil(this.destroy))
      .subscribe(name => this.form.patchValue({
        id: menuItem.id,
        name
      }, { emitEvent: false }));

    this.translationService.translatable(menuItem, 'shortDescription')
      .pipe(takeUntil(this.destroy))
      .subscribe(shortDescription => this.form.patchValue({
        id: menuItem.id,
        shortDescription
      }, { emitEvent: false }));
  }

  public registerOnChange(onChange: (menuItem: Maybe<MenuItemEntity>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  public registerOnValidatorChange?(onValidate: () => void): void {
    this.onValidate = onValidate;
  }

  public validate(): ValidationErrors | null {
    return this.form.invalid
      ? { menuFormInvald: true }
      : null;
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.form.disable()
      : this.form.enable();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
