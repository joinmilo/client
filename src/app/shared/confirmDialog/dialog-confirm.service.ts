import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from './confirm.component';
import { ConfirmDialogData } from './typings/confirm-dialog';

@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  public open(dialogData: ConfirmDialogData): Observable<any>{
    return this.dialog.open(ConfirmComponent, { data: dialogData }).afterClosed();
  }
}
