import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, map, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FlipCardSliderInput, FlipCardSliderOutput } from 'src/app/shared/widgets/sliders/flip-card-slider/typings/flip-card-slider';
import { AdminLandingActions } from '../state/admin-landing.actions';
import { selectDeveloperContact, selectMilestones } from '../state/admin-landing.selectors';
import { AdminLandingContactComponent } from './contact/admin-landing-contact.component';
import { AdminLandingMilestoneComponent } from './milestone/admin-landing-milestone.component';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss'],
})
export class AdminLandingComponent implements OnInit, OnDestroy {

  public contact = this.store.select(selectDeveloperContact);

  public milestoneTitles?: Maybe<string[]>;

  public flipCardSliderData = this.store.select(selectMilestones)
    .pipe(
      map(milestones => milestones?.map(milestone => (
        {
          title: this.translationService.translatable(milestone.translatables, 'title'),
          elements: milestone.elements?.map(element =>
            this.translationService.translatable(element?.translatables, 'name')),
          pictureUrl: milestone.uploads?.[0]?.media?.url
        })) as FlipCardSliderInput[]
      ),
    );

  private destroy = new Subject<void>();

  constructor(
    private store: Store, private translationService: TranslationService
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(AdminLandingActions.getDeveloperContact(
      { name: 'codeschluss' }
    ));
    this.store.dispatch(AdminLandingActions.getMilestones());
  }

  public openContact(): void {
    this.store.dispatch(CoreActions.setSidenavComponent({
      component: AdminLandingContactComponent
    }));
  }

  public openMilestoneElement(roadmapOutput: FlipCardSliderOutput): void {
    this.store.select(selectMilestones)
      .pipe(
        map(milestones => milestones?.[roadmapOutput.cardIndex]
          .elements?.[roadmapOutput.elementIndex]),
        takeUntil(this.destroy)
      )
      .subscribe(element => this.store.dispatch(CoreActions.setSidenavComponent({
        component: AdminLandingMilestoneComponent,
        params: {
          element
        }
      })))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
