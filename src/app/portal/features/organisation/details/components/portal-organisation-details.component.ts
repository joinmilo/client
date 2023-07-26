import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { organisationsFeatureKey, slug } from 'src/app/core/constants/core.constants';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { Maybe, MediaEntity, OrganisationEntity } from 'src/schema/schema';
import { PortalOrganisationDetailsActions } from '../state/portal-organisation-details.actions';
import { selectOrganisationDetails } from '../state/portal-organisation-details.selectors';

@Component({
  selector: 'app-portal-organisation-details',
  templateUrl: './portal-organisation-details.component.html',
  styleUrls: ['./portal-organisation-details.component.scss']
})
export class PortalOrganisationDetailsComponent implements OnInit, OnDestroy {

  public categoryUrl = organisationsFeatureKey;

  public organisation?: Maybe<OrganisationEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalOrganisationDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectOrganisationDetails)),
      takeUntil(this.destroy)
    ).subscribe(organisation => {
      this.organisation = organisation;
      this.titleImage = organisation?.uploads?.find(upload => upload?.title)?.media;
      
      this.marker = {
        entity: 'OrganisationEntity',
        data: [organisation]
      };

      this.media = organisation?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(organisationMedia => organisationMedia?.media)
        ?.slice(0, 3) as MediaEntity[];
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

