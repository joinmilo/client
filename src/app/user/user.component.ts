import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '../core/state/selectors/core.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public loading = this.store.select(selectIsLoading);

  constructor(
    private store: Store,
  ) { }
}
