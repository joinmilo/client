import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, map, takeUntil } from 'rxjs';
import { TranslationService } from 'src/app/core/services/translation.service';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FlipCardSliderInput, RoadmapOutput } from 'src/app/shared/widgets/roadmap/typings/slider';
import { AdminLandingActions } from '../state/admin-landing.actions';
import { selectDeveloperContact, selectMilestones, selectNewsFeeds } from '../state/admin-landing.selectors';


@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss'],
})
export class AdminLandingComponent implements OnInit, OnDestroy {

  public contact = this.store.select(selectDeveloperContact);

  public newsFeeds = this.store.select(selectNewsFeeds);

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

  ngOnInit(): void {
    this.store.dispatch(AdminLandingActions.getNewsfeed()),
      this.store.dispatch(AdminLandingActions.getDeveloperContact(
        {
          name: 'codeschluss'
        }
      ));
    this.store.dispatch(AdminLandingActions.getMilestones());
  }

  openHelpMenu(roadmapOutput: RoadmapOutput) {

    this.store.select(selectMilestones).subscribe(milestones => {
      let titleLabel;
      let contentLabel;

      this.translationService.translatable(
        milestones?.[roadmapOutput.milestoneindex]
          .elements?.[roadmapOutput.elementIndex]?.translatables, 'name').pipe(takeUntil(this.destroy)).subscribe(name => titleLabel = name);

      this.translationService.translatable(
        milestones?.[roadmapOutput.milestoneindex]
          .elements?.[roadmapOutput.elementIndex]?.translatables, 'description').pipe(takeUntil(this.destroy)).subscribe(description => contentLabel = description);

      this.store.dispatch(CoreActions.setHelp({
        titleLabel: titleLabel,
        contentLabel: contentLabel
      }))
    })
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
