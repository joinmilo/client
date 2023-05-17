import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap, tap } from 'rxjs';
import { tokenSlug } from '../../constants/user.constants';
import { UserActions } from '../../state/user.actions';
import { selectUserVerified } from '../../state/user.selectors';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  
  public verified? : Observable<boolean>; 

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.verified = this.route.paramMap.pipe(
      tap(params => {
        this.store.dispatch(UserActions.verify(params.get(tokenSlug)));
      }),
      switchMap(() => this.store.select(selectUserVerified))
    );
  }
}
