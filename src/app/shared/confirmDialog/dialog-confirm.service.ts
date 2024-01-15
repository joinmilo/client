import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from './confirm.component';
import { ConfirmDialogData } from './typings/confirm-dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  public confirm(dialogData: ConfirmDialogData): Observable<boolean>{
    return this.dialog.open(ConfirmComponent, { data: dialogData }).afterClosed();
  }
}
