import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import {
  ConfirmDialogData,
  ConfirmDialogType,
} from './typings/confirm-dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  standalone: true,
  imports: [CommonModule, CoreModule, MatButtonModule, MatDialogModule],
})
export class ConfirmComponent implements OnInit {
  
  public titleLabel?: Maybe<string>;

  public messageLabel?: Maybe<string>;

  public buttonLabel?: Maybe<string>;

  public buttonColor?: Maybe<string>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: Maybe<ConfirmDialogData>
  ) {}

  ngOnInit(): void {
    switch (this.dialogData?.type) {
      case ConfirmDialogType.Cancel:
        this.titleLabel == 'confirm';
        this.messageLabel == 'areYouSureToCancel?';
        this.buttonColor == 'primary';
        this.buttonLabel == 'confirm';
        break;
      case ConfirmDialogType.Change:
        this.titleLabel == 'confirmChanges';
        this.messageLabel == 'areYouSureToChange?';
        this.buttonColor == 'primary';
        this.buttonLabel == 'confirm';
        break;
      case ConfirmDialogType.Delete:
        this.titleLabel == 'delete';
        this.messageLabel == 'areYouSureToDelete?';
        this.buttonColor == 'warn';
        this.buttonLabel == 'delete';
        break;
      case ConfirmDialogType.Reset:
        this.titleLabel == 'confirm';
        this.messageLabel == 'areYouSureToReset?';
        this.buttonColor == 'primary';
        this.buttonLabel == 'confirm';
        break;
      default: 
        this.titleLabel == this.dialogData?.customSettings?.titleLabel;
        this.messageLabel == this.dialogData?.customSettings?.messageLabel;
        this.buttonColor == this.dialogData?.customSettings?.buttonColor;
        this.buttonLabel == this.dialogData?.customSettings?.buttonLabel;
    }
  }
}
