import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreActions } from '../../state/actions/core.actions';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {

  constructor(
    private store: Store,) {
  }

  public close(): void {
    this.store.dispatch(CoreActions.removeAsideComponent());
  }

}
