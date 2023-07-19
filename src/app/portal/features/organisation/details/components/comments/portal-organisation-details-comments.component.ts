import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { PortalOrganisationDetailsActions } from '../../state/portal-organisation-details.actions';
import { selectOrganisationComments } from '../../state/portal-organisation-details.selectors';


@Component({
  selector: 'app-portal-organisation-details-comments',
  templateUrl: './portal-organisation-details-comments.component.html',
  styleUrls: ['./portal-organisation-details-comments.component.scss']
})
export class PortalOrganisationDetailsCommentsComponent implements OnInit, OnDestroy {
  
  public comments = this.store.select(selectOrganisationComments);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }
    
  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalOrganisationDetailsActions.getComments(params.get(slug) || '')));
  }

  public saveComment(content: string): void {
    this.store.dispatch(PortalOrganisationDetailsActions.saveOrganisationComment({
      content,
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}