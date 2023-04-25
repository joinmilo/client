import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/core.actions';
import { selectLanguages } from 'src/app/core/state/core.selectors';
import { LanguageEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-language',
  templateUrl: './portal-header-language.component.html',
  styleUrls: ['./portal-header-language.component.scss'],
})
export class PortalHeaderLanguageComponent {

  public languages = this.store.select(selectLanguages);

  constructor(
    private store: Store,
  ) { }

  public changeLanguage(language: LanguageEntity) {
    this.store.dispatch(CoreActions.changeLanguage(language));
  }

}