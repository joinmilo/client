import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { CardType } from 'src/app/shared/card/typings/card';
import { FormPageFeatureActions } from '../state/form-page-feature.actions';
import { selectRecentForms } from '../state/form-page-feature.selectors';


@Component({
  selector: 'app-form-page-feature',
  templateUrl: './form-page-feature.component.html',
  styleUrls: ['./form-page-feature.component.scss']
})
export class FormPageFeatureComponent {

  public cardType = CardType.Content;
  
  public forms = this.store.select(selectRecentForms).pipe(
    tap(result => !result?.length
      && this.store.dispatch(FormPageFeatureActions.getRecentForms())));

  constructor(
    private store: Store, 
  ) { }

}
