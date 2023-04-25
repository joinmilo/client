import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap, tap } from 'rxjs';
import { pageSlug } from '../../constants/portal-main.constants';
import { PortalMainActions } from '../../state/portal-main.actions';
import { selectCurrentPage } from '../../state/portal-main.selectors';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent {

  public page = this.route.paramMap.pipe(
    tap(params => params.get(pageSlug)
      && this.store.dispatch(PortalMainActions.getPage(params.get(pageSlug)))),
    switchMap(() => this.store.select(selectCurrentPage))
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) { }
  
}
