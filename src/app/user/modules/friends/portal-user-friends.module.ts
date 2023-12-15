import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { IconComponent } from 'src/app/shared/widgets/icon/icon.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalAddFriendsComponent } from './components/add-friends/portal-add-friends.component';
import { PortalAllFriendsComponent } from './components/all-friends/portal-all-friends.component';
import { PortalFriendsComponent } from './components/portal-friends.component';
import { PortalReceivedFriendRequestsComponent } from './components/received-friend-requests/portal-received-friend-requests.component';
import { PortalSentFriendRequestsComponent } from './components/sent-friend-requests/portal-sent-friend-requests.component';
import { portalFriendsStateKey } from './constants/portal-friends.constant';
import { PortalUserFriendsRoutingModule } from './portal-user-friends-routing.module';
import { PortalFriendsEffects } from './state/portal-friends.effects';
import { portalFriendsReducer } from './state/portal-friends.reducer';

const components = [
  PortalFriendsComponent,
  PortalAddFriendsComponent,
  PortalAllFriendsComponent,
  PortalReceivedFriendRequestsComponent,
  PortalSentFriendRequestsComponent
];

const framework = [
  CommonModule
];

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  CardModule,
  CoreModule,
  FormsModule,
  IconComponent,
  MediaWidgetsModule,
  PortalUserFriendsRoutingModule,
  RadioButtonFormModule,
  TableModule,
  TitleModule, 
];

const libs = [
  StoreModule.forFeature(portalFriendsStateKey, portalFriendsReducer),
  EffectsModule.forFeature([PortalFriendsEffects]),
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework, 
    ...materials, 
    ...modules, 
    ...libs],
  exports: [...components],
})
export class PortalFriendsModule {}
