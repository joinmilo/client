import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Subject, filter, switchMap } from 'rxjs';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { navigatorQuestionsRoute } from '../constants/navigator-questions.constant';
import { NavigatorPortalQuestionsActions } from '../state/navigator-portal-questions.actions';
import { selectCurrentPage, selectNavigatorStateInputs } from '../state/navigator-portal-questions.selectors';

@Component({
  selector: 'app-navigator-portal-questions',
  templateUrl: './navigator-portal-questions.component.html',
  styleUrls: ['./navigator-portal-questions.component.scss'],
})
export class NavigatorPortalQuestionsComponent implements OnInit, OnDestroy {

  public currentPage?: Maybe<NavigatorPageEntity>;

  private destroy = new Subject<void>();

  public inputs: RadioCardInput[] = [];

  public initValue = '';

  public showDescription: number | null = null;

  public toggleDescription(index: number) {
    this.showDescription = this.showDescription === index ? null : index;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store) {}

    public ngOnInit(): void {
      this.activatedRoute?.params.pipe(
        switchMap(params => {
          const action = params[slug]
            ? NavigatorPortalQuestionsActions.getPage(params[slug])
            : NavigatorPortalQuestionsActions.getStartPage();
          this.store.dispatch(action);
          return this.store.select(selectCurrentPage);
        }),
        filter(page => !!page),
      ).subscribe(page => {
        this.currentPage = page; 
        this.initValue = (page?.parentChoices?.length ?? 0)  > 0 ? page?.slug ?? '' : ''});
        this.store.select(selectNavigatorStateInputs).subscribe(inputs => this.inputs = inputs);
    }

  public route(route: string | null): void {
    this.router.navigate([portalUrl, navigatorFeatureKey, navigatorQuestionsRoute, route]);
  }
  
  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}