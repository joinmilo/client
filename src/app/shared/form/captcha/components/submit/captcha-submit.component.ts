import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, filter } from 'rxjs';
import { selectIsLoading } from 'src/app/core/state/selectors/core.selectors';
import { CaptchaDialogComponent } from '../dialog/captcha-dialog.component';

@Component({
  selector: 'app-captcha-submit',
  templateUrl: 'captcha-submit.component.html',
  styleUrls: ['./captcha-submit.component.scss']
  
})
export class CaptchaSubmitComponent implements OnDestroy {

  @Input()
  public disabled = false;

  @Input()
  public label = 'send';

  @Output()
  public verified = new EventEmitter<string>();

  public form = new FormGroup({});

  public loading = this.store.select(selectIsLoading);

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private store: Store,
  ) { }

  public submit(): void {
    window.scrollTo(0,0);
    
    this.dialog.open(CaptchaDialogComponent, {
      panelClass: 'media-dialog'
    }).afterClosed()
      .pipe(filter(token => !!token))
      .subscribe(token => this.verified.emit(token as string))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}