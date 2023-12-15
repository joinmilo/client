import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, map, takeUntil } from 'rxjs';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectAcceptedFriendUsers, selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { SolidIconsType } from 'src/assets/fontawesome/solid-icons';
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
      icon: 'trash' as SolidIconsType
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