import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { CardType } from 'src/app/shared/card/typings/card';
import { AuthorPageFeatureActions } from '../state/author-page-feature.actions';
import { selectRecentAuthors } from '../state/author-page-feature.selectors';


@Component({
  selector: 'app-author-page-feature',
  templateUrl: './author-page-feature.component.html',
  styleUrls: ['./author-page-feature.component.scss']
})
export class AuthorPageFeatureComponent {

  public cardType = CardType.Contact;
  
  public authors = this.store.select(selectRecentAuthors).pipe(
    tap(result => !result?.length
      && this.store.dispatch(AuthorPageFeatureActions.getRecentAuthors())));

  constructor(
    private store: Store, 
  ) { }

}
