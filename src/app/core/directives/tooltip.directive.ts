import { Directive, HostListener, Input, OnDestroy } from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';

@Directive({
  selector: '[appTooltip]',
  providers: [MatTooltip],
})
export class TooltipDirective implements OnDestroy {

  @Input()
  public appTooltip?: Maybe<string>;

  @Input()
  public direction?: TooltipPosition;

  private subscription?: Subscription;

  private destroy = new Subject<void>();

  constructor(
    private tooltip: MatTooltip,
    private translationService: TranslationService,
  ) { }

  @HostListener('mouseover')
  public onMouseOver(): void {
    this.subscription = this.translationService
      .label(this.appTooltip)
      .pipe(takeUntil(this.destroy))
      .subscribe(label => {
        if (label) {
          this.tooltip.message = label;
          this.tooltip.position = this.direction ?? 'below';
          this.tooltip.show();
        }
      });
  }

  @HostListener('mouseout')
  public onMouseOut(): void {
    this.tooltip.hide();
    this.subscription?.unsubscribe();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
