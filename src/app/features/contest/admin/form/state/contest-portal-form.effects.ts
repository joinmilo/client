import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class ContestAdminFormEffects {
  
  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private store: Store,
  ) {}
}
