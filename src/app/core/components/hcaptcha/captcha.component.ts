import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { selectCaptchaSitekey } from '../../state/core.selectors';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent {

  public sitekey = this.store.select(selectCaptchaSitekey)
    .pipe(
      filter(config => !!config?.value),
      map(config => config?.value as string),
    );

  constructor(private store: Store) { }
}
