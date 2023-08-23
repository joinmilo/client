import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { PortalParticipateActions } from '../../state/portal-participate.actions';


@Component({
  selector: 'app-portal-participate-become-author',
  templateUrl: './portal-participate-become-author.component.html',
  styleUrls: ['./portal-participate-become-author.component.scss']
})
export class PortalParticipateBecomeAuthorComponent implements OnInit, OnDestroy{

  private currentUser?: Maybe<UserContextEntity>;

  appliedForArticlesManage: boolean | undefined;

  public form = this.fb.group({
    author: [true],
    content: ['', [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(  
    private store: Store,
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);
  }

  public save(): void {
  this.store.dispatch(PortalParticipateActions.saveAuthorApplication({
    user: {
      id: this.currentUser?.user?.id,
      privilegeApplications: this.form.value.author
        ? [
            {
              user: { id: this.currentUser?.user?.id },
              privilege: { code: 'articles_manage' },
              accepted: false,
              content: this.form.value.content
            }
          ]
        : []
    }
  }));
}
  
  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}