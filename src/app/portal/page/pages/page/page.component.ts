import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap, tap } from 'rxjs';
import { pageSlug } from '../../constants/page.constants';
import { PageActions } from '../../state/page.actions';
import { selectCurrentPage } from '../../state/page.selectors';

@Component({
  selector: 'app-portal-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  public page = this.route.paramMap.pipe(
    tap(params => params.get(pageSlug)
      && this.store.dispatch(PageActions.getPage(params.get(pageSlug)))),
    switchMap(() => this.store.select(selectCurrentPage))
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) { }
  
}
