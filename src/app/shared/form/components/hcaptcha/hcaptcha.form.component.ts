import { Component, QueryList, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgHcaptchaComponent } from 'ng-hcaptcha';
import { filter, map } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { hCaptchaSitekeyConfig } from '../../../../core/constants/core.constants';
import { selectConfiguration } from '../../../../core/state/core.selectors';

@Component({
  selector: 'app-hcaptcha-form',
  templateUrl: './hcaptcha.form.component.html',
  styleUrls: ['./hcaptcha.form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: HcaptchaFormComponent
    }
  ],
})
export class HcaptchaFormComponent implements ControlValueAccessor {

  @ViewChildren(NgHcaptchaComponent)
  public captchaComponents?: QueryList<NgHcaptchaComponent>;

  private onChange?: (token: Maybe<string> | undefined) => void;

  private value?: Maybe<string>;

  public sitekey = this.store.select(selectConfiguration(hCaptchaSitekeyConfig))
    .pipe(
      filter(config => !!config?.value),
      map(config => config?.value as string),
    );

  constructor(
    private store: Store) {}

  public set token(token: Maybe<string> | undefined) {
    this.onChange && this.onChange(token);
    this.value = token
    !token && (this.captchaComponents?.forEach(component => component.reset()));
  }

  public get token(): Maybe<string> | undefined {
    return this.value;
  }

  writeValue(value: string): void {
    this.token = value;
  }

  registerOnChange(onChange: (token: Maybe<string> | undefined) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(): void {
    return;
  }

}
