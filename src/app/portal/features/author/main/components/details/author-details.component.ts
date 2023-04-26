import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { authorId } from '../../constants/author.constant';
import { AuthorActions } from '../../state/author.actions';
import { selectAuthorDetails } from '../../state/author.selectors';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit{

  public author = this.store.select(selectAuthorDetails);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const author = params.get(authorId) || '';
      this.store.dispatch(AuthorActions.getAuthorDetails(author));
    });
  }

  sendEmail(email: Maybe<string>) {
    window.location.href = `mailto:${email}`;
  }
}
