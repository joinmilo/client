import { Component, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, map, takeUntil } from 'rxjs';
import { selectAcceptedFriendUsers, selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../../state/portal-friends.actions';

@Component({
  selector: 'app-portal-all-friends',
  templateUrl: './portal-all-friends.component.html',
  styleUrls: ['./portal-all-friends.component.scss'],
})
export class PortalAllFriendsComponent implements OnDestroy {

  public actions: CardActionInput[] = [
    {
      label: 'removeFriend',
      icon: ['fas', 'trash']
    }
  ];

  private currentUser?: Maybe<UserContextEntity>;

  public friends = this.store.select(selectAcceptedFriendUsers).pipe(
    map(friends => ({
      result: friends,
    }))
  );

  public cardType = CardType.Contact;

  private destroy = new Subject<void>();

  constructor(
    public store: Store
  ) {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);
  }

  public deleteFriend(action: CardActionOutput): void {
    this.store.dispatch(PortalFriendsActions.deleteFriend(action.element?.id));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}