import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { GetUserContextsGQL } from "src/schema/schema";

@Injectable()
export class PortalFriendsEffects { 



  constructor(
    private actions: Actions,
    private getUserContextsService: GetUserContextsGQL,
    private store: Store,
  ) {}
}