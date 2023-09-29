import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-icon-form',
  templateUrl: './icon-form.component.html',
  styleUrls: ['./icon-form.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconFormComponent),
      multi: true
    }
  ],
  imports: [
    CommonModule,
    CoreModule,
    FontAwesomeModule,

    MatFormFieldModule,
    MatSelectModule,
    
    ReactiveFormsModule,
  ]
})

export class IconFormComponent implements ControlValueAccessor {

  public control = new FormControl<Maybe<IconProp>>(undefined);

  public onChange?: (value: Maybe<IconProp>) => void;
  public onTouched?: () => void;

  public get icons(): IconDefinition[] {
    return Object.values(fas);
  }

  private destroy = new Subject<void>();

  constructor() {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => {
        this.onChange?.(value);
        this.onTouched?.();
      });
  }

  public writeValue(value?: Maybe<IconProp>): void {
    this.control.patchValue(value, { emitEvent: false });
  }

  public registerOnChange(onChange: (value: Maybe<IconProp>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

}
