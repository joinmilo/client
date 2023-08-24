import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Store } from '@ngrx/store';
import { LanguageEntity } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectLanguages } from 'src/app/core/state/selectors/core.selectors';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-header-language',
  templateUrl: './header-language.component.html',
  styleUrls: ['./header-language.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,

    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
  ]
})
export class HeaderLanguageComponent {
  
  public currentUser = this.store.select(selectCurrentUser);

  public languages = this.store.select(selectLanguages);

  constructor(private store: Store) {}

  public changeLanguage(language: LanguageEntity) {
    this.store.dispatch(CoreActions.changeLanguage(language));
  }
}