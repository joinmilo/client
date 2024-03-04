import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Subject, filter, switchMap } from 'rxjs';
import { Maybe, NavigatorChoiceEntity, NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { NavigatorPortalDetailsLayoutActions } from '../state/navigator-portal-details-layout.actions';
import { selectCurrentPage, selectNavigatorStateInputs } from '../state/navigator-portal-details-layout.selectors';

@Component({
  selector: 'app-navigator-portal-details-layout',
  templateUrl: './navigator-portal-details-layout.component.html',
  styleUrls: ['./navigator-portal-details-layout.component.scss'],
})
export class NavigatorPortalDetailsLayoutComponent implements OnInit, OnDestroy {

  public currentPage?: Maybe<NavigatorPageEntity>;

  private destroy = new Subject<void>();

  public inputs: RadioCardInput[] = [];

  public initValue = '';

  private currentIndex = 0;

  public showDescription: number | null = null;

  toggleDescription(index: number) {
    this.showDescription = this.showDescription === index ? null : index;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService) {
      
    }

    public ngOnInit(): void {

      this.activatedRoute?.params.pipe(
        switchMap(params => {
          const action = params[slug]
            ? NavigatorPortalDetailsLayoutActions.getPage(params[slug])
            : NavigatorPortalDetailsLayoutActions.getStartPage();
          this.store.dispatch(action);
          return this.store.select(selectCurrentPage);
        }),
        filter(page => !!page),
      ).subscribe(page => {
        // var choiceName: Maybe<string>;
        // this.translationService.translatable(page?.parentChoices?.[0]?.translatables, 'name')
        // .subscribe(name => choiceName = name);
        // this.inputs.push({
        //   display: (this.inputs.length + 1).toString(),
        //   label: choiceName ? choiceName : "Start",
        //   value: page?.slug,
        // });
        // this.store.select(selectNavigatorStateIndex).subscribe(index => this.currentIndex = index);
        
        // console.log("be4Slice", this.inputs);
        // console.log("index", this.currentIndex);
        // this.currentIndex = this.currentIndex + 1;
        // this.inputs = this.inputs.slice(0, this.currentIndex);
        // console.log("sliced", this.inputs);
        // this.inputs = this.inputs.slice(0, (this.inputs.findIndex(input => input.value == page?.slug) +1));
        
        this.currentPage = page; 
        this.initValue = page?.slug!});
        this.store.select(selectNavigatorStateInputs).subscribe(inputs => this.inputs = inputs);
    }

  public route(route: string | null): void {
    this.router.navigate([portalUrl, 'navigator', 'start', route]);
  }

  public toNewPage(choice: Maybe<NavigatorChoiceEntity>){
    var choiceName: Maybe<string>;
    this.translationService.translatable(choice?.translatables, 'name').subscribe(name => choiceName = name);

    this.inputs = [...this.inputs, {
        display: (this.inputs.length + 1).toString(),
        label: choiceName!,
        value: choice?.nextPage?.slug,
      }];

    this.store.dispatch(NavigatorPortalDetailsLayoutActions.setNavigatorState(this.inputs, this.inputs.length));
    
    this.router.navigate([portalUrl, 'navigator', 'start', choice?.nextPage?.slug]);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}