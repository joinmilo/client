import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  
  public forms = this.store.select(selectRecentForms);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(FormPageFeatureActions.getRecentForms())
  }

}
