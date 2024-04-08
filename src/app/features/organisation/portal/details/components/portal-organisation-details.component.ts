import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { organisationsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { SchemaService } from 'src/app/core/services/schema.service';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
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

  public mediaTitle?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  private entity = 'OrganisationEntity'; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private schemaService: SchemaService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalOrganisationDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectOrganisationDetails)),
      takeUntil(this.destroy)
    ).subscribe(organisation => {
      this.organisation = organisation;
      this.mediaTitle = organisation?.uploads?.find(upload => upload?.title)?.media;

      this.marker = {
        entity: 'OrganisationEntity',
        data: [organisation]
      };

      this.media = organisation?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(organisationMedia => organisationMedia?.media)
        ?.slice(0, 5) as MediaEntity[];

      this.schemaService.createEntitySchema('OrganisationEntity', this.organisation);
    });

  }

  public scrollToMap(): void {
    const mapElement = document.querySelector('.map-area') as HTMLElement;
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

