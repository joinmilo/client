import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { OrganisationAdminDetailsLandingActions } from '../state/organisation-admin-details-landing.actions';
import { selectOrganisationAdminDetailsLanding } from '../state/organisation-admin-details-landing.selectors';

@Component({
  selector: 'app-organisation-admin-details-landing',
  templateUrl: './organisation-admin-details-landing.component.html',
  styleUrls: ['./organisation-admin-details-landing.component.scss']
})
export class OrganisationAdminDetailsLandingComponent implements OnInit, OnDestroy {

  public organisation?: Maybe<OrganisationEntity>;

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
      tap(params => this.store.dispatch(OrganisationAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectOrganisationAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(organisation => {
      this.organisation = organisation;
      this.media = organisation?.uploads?.map(organisationMedia => organisationMedia?.media)
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