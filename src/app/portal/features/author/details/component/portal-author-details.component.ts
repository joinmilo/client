import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { authorId } from '../constants/portal-author-details.constant';
import { AuthorDetailsActions } from '../state/portal-author-details.actions';
import { selectAuthorDetails } from '../state/portal-author-details.selectors';

@Component({
  selector: 'app-portal-author-details',
  templateUrl: './portal-author-details.component.html',
  styleUrls: ['./portal-author-details.component.scss']
})
export class PortalAuthorDetailsComponent implements OnInit{

  public author = this.store.select(selectAuthorDetails);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const author = params.get(authorId) || '';
      this.store.dispatch(AuthorDetailsActions.getDetails(author));
    });
  }
}
