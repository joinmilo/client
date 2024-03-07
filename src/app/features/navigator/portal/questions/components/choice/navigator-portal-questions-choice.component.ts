import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Maybe, NavigatorChoiceEntity } from 'src/app/core/api/generated/schema';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { navigatorQuestionsRoute } from '../../constants/navigator-questions.constant';
import { NavigatorPortalQuestionsActions } from '../../state/navigator-portal-questions.actions';
import { selectNavigatorStateInputs } from '../../state/navigator-portal-questions.selectors';

@Component({
  selector: 'app-navigator-portal-questions-choice',
  templateUrl: './navigator-portal-questions-choice.component.html',
  styleUrls: ['./navigator-portal-questions-choice.component.scss'],
})
export class NavigatorPortalDetailsQuestionsChoiceComponent {

  @Input()
  public choice?: Maybe<NavigatorChoiceEntity>;

  private inputs: RadioCardInput[] = [];

  public showDescription = false;
  
  constructor(
    private router: Router,
    private store: Store,
    private translationService: TranslationService) { }

  public toNewPage(choice: Maybe<NavigatorChoiceEntity>){
    let choiceName: Maybe<string>;
    this.translationService.translatable(choice?.translatables, 'name').subscribe(name => choiceName = name);

    this.store.select(selectNavigatorStateInputs).subscribe(inputs => {
      this.inputs = inputs.slice(0, (inputs.findIndex(input => input.value == (choice?.parent?.slug ?? '')) + 1));
    });

    this.inputs = [...this.inputs, {
        display: (this.inputs.length + 1).toString(),
        label: choiceName ?? '',
        value: choice?.nextPage?.slug,
      }];

    this.store.dispatch(NavigatorPortalQuestionsActions
      .setNavigatorState(this.inputs, this.inputs.length));

    this.router.navigate([portalUrl, navigatorFeatureKey, navigatorQuestionsRoute, choice?.nextPage?.slug]);
  }
}