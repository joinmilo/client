import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { LabelService } from '../services/label.service';

@Directive({
  selector: '[appLabel]'
})
export class LabelDirective implements OnInit, OnChanges, OnDestroy {

  @Input()
  public appLabel?: Maybe<string>;

  @Input()
  public preFix?: string;

  @Input()
  public suffix?: string;

  private destroy = new Subject<void>();

  private labels = new Subject<string>();

  constructor(
    private el: ElementRef,
    private labelService: LabelService) { }

  public ngOnInit(): void {
    this.labels.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy),
      switchMap((label) => this.labelService.lookup(label))
    ).subscribe(label => this.el.nativeElement.innerHTML = `${this.preFix ?? ''} ${label ?? ''} ${this.suffix ?? ''}`);

    if (this.appLabel) {
      this.labels.next(this.appLabel);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['appLabel']) {
      this.labels.next(changes['appLabel'].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.labels.complete();
  }
}
