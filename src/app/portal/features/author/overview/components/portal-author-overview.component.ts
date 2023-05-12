import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { CardData, CardEntity, CardType } from 'src/app/shared/card/typings/card';
import { PortalAuthorOverviewActions } from '../state/portal-author-overview.actions';
import { selectAuthors } from '../state/portal-author-overview.selectors';

@Component({
  selector: 'app-portal-author-overview',
  templateUrl: './portal-author-overview.component.html',
  styleUrls: ['./portal-author-overview.component.scss']
})
export class PortalAuthorOverviewComponent {

  public authors = this.store.select(selectAuthors).pipe(
    tap(result => !result
      && this.store.dispatch(PortalAuthorOverviewActions.getRecentAuthors()))
  )
  
  public title?: string;

  public types = {
    contact: CardType.Contact,
  }

  @Input()
  public entity?: CardEntity;

  @Input()
  public data?: CardData;

  constructor(
    private store: Store,
  ) {}

}