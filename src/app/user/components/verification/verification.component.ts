import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs';
import { tokenSlug } from '../../constants/user.constants';
import { UserActions } from '../../state/user.actions';
import { selectUserVerified } from '../../state/user.selectors';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  
  public verified = this.store.select(selectUserVerified);

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}
  
  public ngOnInit(): void {
    this.route.paramMap.pipe(
      take(1),
      tap(params => this.store.dispatch(UserActions.verify(params.get(tokenSlug))))
    ).subscribe();
  }
}
