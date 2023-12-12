import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { IconDefinition, SolidIcons } from '@fortawesome/fontawesome-svg-core';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { SolidIcons } from 'src/assets/fontawesome/solid-icons';


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
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    
    ReactiveFormsModule,
  ]
})

export class IconFormComponent implements ControlValueAccessor, OnInit {

  public control = new FormControl<Maybe<SolidIcons>>(undefined);

  public onChange?: (value: Maybe<SolidIcons>) => void;
  public onTouched?: () => void;


  
  private destroy = new Subject<void>();

  // public icons?: IconDefinition[];
  public solidIcons: SolidIcons[] = [];

  constructor() {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => {
        this.onChange?.(value);
        this.onTouched?.();
      });

    
  }


  ngOnInit(): void {
    console.log('icons', this.solidIcons);
  }

  

  // ngOnInit(): void {
  //   this.solidIcons = Object.values('fas');
  //   this.icons = Object.values('fas');

  //   this.control.valueChanges.pipe(
  //     takeUntil(this.destroy),
  //     map(value => this.solidIcons = this.icons?.filter(icon => value
  //       ? icon.iconName.toLocaleLowerCase().includes(value.toString())
  //       : true
  //     ))
  //   ).subscribe();
  // }

  public writeValue(value?: Maybe<SolidIcons>): void {
    this.control.patchValue(value, { emitEvent: false });
  }

  public registerOnChange(onChange: (value: Maybe<SolidIcons>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

}
