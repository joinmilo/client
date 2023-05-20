import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { PortalMainActions } from '../../state/portal-main.actions';
import { selectCurrentPage } from '../../state/portal-main.selectors';

@Component({
  selector: 'app-portal-landing',
  templateUrl: './portal-landing.component.html',
  styleUrls: ['./portal-landing.component.scss']
})
export class PortalLandingComponent {

  public page = this.store.select(selectCurrentPage)
    .pipe(
      tap(landing => !landing?.id
        && this.store.dispatch(PortalMainActions.getLandingPage()))
    );

  constructor(
    private store: Store,
  ) { }
}
