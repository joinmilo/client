import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { collapse } from 'ngx-cinlib/core';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Maybe, NavigatorChoiceEntity } from 'src/app/core/api/generated/schema';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { NavigatorPortalDetailsLayoutActions } from '../../state/navigator-portal-details-layout.actions';
import { selectNavigatorStateInputs } from '../../state/navigator-portal-details-layout.selectors';

@Component({
  selector: 'app-navigator-portal-details-layout-choice',
  templateUrl: './navigator-portal-details-layout-choice.component.html',
  styleUrls: ['./navigator-portal-details-layout-choice.component.scss'],
  animations: [collapse()]
})
export class NavigatorPortalDetailsLayoutChoiceComponent {

  @Input()
  public choice?: Maybe<NavigatorChoiceEntity>;

  private inputs: RadioCardInput[] = [];

  public showDescription = false;
  
  constructor(
    private router: Router,
    private store: Store,
    private translationService: TranslationService) { }

  public toNewPage(choice: Maybe<NavigatorChoiceEntity>){
    var choiceName: Maybe<string>;
    this.translationService.translatable(choice?.translatables, 'name').subscribe(name => choiceName = name);

    this.store.select(selectNavigatorStateInputs).subscribe(inputs => {
      this.inputs = inputs.slice(0, (inputs.findIndex(input => input.value == (choice?.parent?.slug ?? '')) + 1));
    });

    this.inputs = [...this.inputs, {
        display: (this.inputs.length + 1).toString(),
        label: choiceName!,
        value: choice?.nextPage?.slug,
      }];

    this.store.dispatch(NavigatorPortalDetailsLayoutActions
      .setNavigatorState(this.inputs, this.inputs.length));

    this.router.navigate([portalUrl, 'navigator', 'start', choice?.nextPage?.slug]);
  }
}