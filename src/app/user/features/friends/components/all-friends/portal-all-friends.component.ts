import { Component, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, map, takeUntil } from 'rxjs';
import { selectCurrentUser, selectFriends } from 'src/app/core/state/selectors/user.selectors';
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

  public friends = this.store.select(selectFriends).pipe(
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

  public deleteFriendEntity(action: CardActionOutput): void {
    this.store.dispatch(PortalFriendsActions.deleteFriendEntity(
      this.currentUser?.friendAddressee?.find(friend => friend?.requester?.id === action.element?.id)?.id ||
      this.currentUser?.friendRequester?.find(friend => friend?.addressee?.id === action.element?.id)?.id
    ));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}