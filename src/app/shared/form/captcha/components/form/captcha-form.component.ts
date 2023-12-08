import { Component, QueryList, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgHcaptchaComponent } from 'ng-hcaptcha';
import { filter, map } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { hCaptchaSitekeyConfig } from 'src/app/core/constants/configuration.constants';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';

@Component({
  selector: 'app-captcha-form',
  templateUrl: './captcha-form.component.html',
  styleUrls: ['./captcha-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CaptchaFormComponent
    }
  ],
})
export class CaptchaFormComponent implements ControlValueAccessor {

  @ViewChildren(NgHcaptchaComponent)
  public captchaComponents?: QueryList<NgHcaptchaComponent>;

  private onChange?: (token: Maybe<string>) => void;

  private value?: Maybe<string>;

  public sitekey = this.store.select(selectConfiguration(hCaptchaSitekeyConfig))
    .pipe(
      filter(config => !!config?.value),
      map(config => config?.value as string),
    );

  constructor(
    private store: Store) { }

  public set token(token: Maybe<string> | undefined) {
    this.onChange?.(token);
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
