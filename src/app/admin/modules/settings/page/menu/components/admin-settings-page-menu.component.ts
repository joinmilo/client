import { Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageMenuDialogComponent } from './dialog/admin-settings-page-menu-dialog.component';

@Component({
  selector: 'app-admin-settings-page-menu',
  templateUrl: './admin-settings-page-menu.component.html',
  styleUrls: ['./admin-settings-page-menu.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AdminSettingsPageMenuComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AdminSettingsPageMenuComponent
    },
  ],
})
export class AdminSettingsPageMenuComponent implements ControlValueAccessor, Validator, OnDestroy {

  public menuItems?: MenuItemEntity[];

  public disabled?: boolean;

  private onChange?: (menuItems: Maybe<MenuItemEntity[]>) => void;
  private onTouch?: () => void;
  private onValidate?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private store: Store,
  ) { }

  public added(): void {
    this.dialog.open(AdminSettingsPageMenuDialogComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe((menuItem: MenuItemEntity) => {
        if (menuItem) {
          this.menuItems?.push(menuItem);
        }
      });
  }

  public validate(): ValidationErrors | null {
    return null;
  }

  public writeValue(value: Maybe<MenuItemEntity[]>): void {
  }

  public registerOnChange(onChange: (embeddings: Maybe<MenuItemEntity[]>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  public registerOnValidatorChange?(onValidate: () => void): void {
    this.onValidate = onValidate;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}