import { Component, Input } from '@angular/core';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-navigator-portal-questions-page',
  templateUrl: './navigator-portal-questions-page.component.html',
  styleUrls: ['./navigator-portal-questions-page.component.scss'],
})
export class NavigatorPortalQuestionsPageComponent {

  @Input()
  public page?: Maybe<NavigatorPageEntity>;
}