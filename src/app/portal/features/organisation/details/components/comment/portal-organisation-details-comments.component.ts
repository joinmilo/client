import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { PortalOrganisationDetailsActions } from '../../state/portal-organisation-details.actions';
import { selectOrganisationDetails } from '../../state/portal-organisation-details.selectors';


@Component({
  selector: 'app-portal-organisation-details-comment',
  templateUrl: './portal-organisation-details-comment.component.html',
  styleUrls: ['./portal-organisation-details-comment.component.scss']
})
export class PortalOrganisationDetailsCommentComponent {

  public lastComment = this.store.select(selectOrganisationDetails)
    .pipe(map(organisation => organisation?.lastOrganisationComment));

  constructor(
    private router: Router,
    private store: Store) { }

  public saveComment(content: string): void {
    this.store.select(selectCurrentUser)
      .pipe(take(1))
      .subscribe(user => user?.id
        ? this.store.dispatch(PortalOrganisationDetailsActions.saveOrganisationComment({
            content,
          }))
        : this.router.navigate(['/user', 'login-required']))
  }
}