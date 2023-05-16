import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { Subject, filter } from "rxjs";
import { CaptchaDialogComponent } from '../dialog/captcha-dialog.component';

@Component({
  selector: 'app-captcha-submit',
  templateUrl: 'captcha-submit.component.html',
})
export class CaptchaSubmitComponent implements OnDestroy {

  @Input()
  public disabled = false;

  @Input()
  public label = 'send';

  @Output()
  public verified = new EventEmitter<string>();

  public form = new FormGroup({});


  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
  ) { }

  public submit(): void {
    this.dialog.open(CaptchaDialogComponent).afterClosed()
      .pipe(filter(token => !!token))
      .subscribe(token => this.verified.emit(token as string))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}