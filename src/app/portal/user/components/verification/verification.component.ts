import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { switchMap, tap } from 'rxjs';
import { logoConfig, logoTextConfig } from 'src/app/core/constants/core.constants';
import { selectConfiguration } from 'src/app/core/state/core.selectors';
import { verificationToken } from '../../constants/user.constants';
import { UserActions } from '../../state/user.actions';
import { selectUserVerified } from '../../state/user.selectors';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit{
  
  public verified? : Maybe<boolean>;
  public logoConfig = this.store.select(selectConfiguration(logoConfig)); 
  public logoTextConfig = this.store.select(selectConfiguration(logoTextConfig)); 

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(params => {
        this.store.dispatch(UserActions.verifyUser(params.get(verificationToken)));
      }),
      switchMap(() => this.store.select(selectUserVerified))
    ).subscribe(verified => {
      this.verified = verified;
    });
  }
}
