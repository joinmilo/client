import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { MediaEntity, PageEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsPageDetailsLandingActions } from '../state/admin-settings-page-details-landing.actions';
import { selectAdminSettingsPageDetailsLanding } from '../state/admin-settings-page-details-landing.selectors';

@Component({
  selector: 'app-settings-page-details-landing',
  templateUrl: './admin-settings-page-details-landing.component.html',
  styleUrls: ['./admin-settings-page-details-landing.component.scss']
})
export class AdminSettingsPageDetailsLandingComponent implements OnInit, OnDestroy {

  public page?: Maybe<PageEntity>;

  public media?: Maybe<MediaEntity[]>;

  public expanded = false;
  
  @ViewChild('contentParagraph', { static: true })
  private contentParagraph?: ElementRef<HTMLParagraphElement>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(AdminSettingsPageDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectAdminSettingsPageDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(page => {
      this.page = page;
      this.media = page?.uploads?.map(pageMedia => pageMedia?.media)
        ?.slice(0, 10) as MediaEntity[];
    });
  }

  toggleShowMore() {
    this.contentParagraph?.nativeElement.classList.toggle('expanded');
    this.expanded = !this.expanded;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}