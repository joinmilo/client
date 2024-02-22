import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import {
  Maybe, NavigatorNodeEntity
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { NavigatorPortalDetailsLandingActions } from '../state/navigator-portal-details-landing.actions';
import { selectNavigatorNodeDetails } from '../state/navigator-portal-details-landing.selectors';

@Component({
  selector: 'app-navigator-portal-details-landing',
  templateUrl: './navigator-portal-details-landing.component.html',
  styleUrls: ['./navigator-portal-details-landing.component.scss'],
})
export class NavigatorPortalDetailsLandingComponent implements OnInit, OnDestroy {

  public navigatorStartNode?: Maybe<NavigatorNodeEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {}

  public ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        tap((params) => {this.store.dispatch(NavigatorPortalDetailsLandingActions.getDetails(params[slug] || '')), 
      console.log(params[slug])}),
        switchMap(() => this.store.select(selectNavigatorNodeDetails)),
        takeUntil(this.destroy)
      )
      .subscribe((navigatorNode) => {
        this.navigatorStartNode = navigatorNode;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
