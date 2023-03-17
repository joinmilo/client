import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { PageFeatureActions } from '../../state/page.actions';
import { selectRecentEvents } from '../../state/page.selectors';

@Component({
  selector: 'app-page-event-feature',
  templateUrl: './page-event-feature.component.html',
  styleUrls: ['./page-event-feature.component.scss']
})
export class PageEventFeatureComponent {

  public events?= this.store.select(selectRecentEvents).pipe(
    tap(result => !result?.length
      && this.store.dispatch(PageFeatureActions.getRecentEvents())));

  constructor(
    private store: Store,
  ) { }

}
