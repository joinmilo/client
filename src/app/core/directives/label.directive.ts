import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject, distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { TranslationService } from '../services/translation.service';

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

  @Input()
  public variables?: Map<string, unknown>;

  private destroy = new Subject<void>();

  private labels = new Subject<string>();

  constructor(
    private el: ElementRef,
    private labelService: TranslationService) { }

  public ngOnInit(): void {
    this.labels.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy),
      switchMap((label) => this.labelService.label(label)),
      map(label => {
        if (this.variables?.entries()) {
          this.variables.forEach((value, key) => label = label?.replaceAll(`$\{${key?.toString()}}`, (value?.toString() || '')))
        }
        return label;
      }),
    ).subscribe(label => this.el.nativeElement.innerHTML = `${this.prefixing()}${label ?? ''}${this.suffixing()}`);

    if (this.appLabel) {
      this.labels.next(this.appLabel);
    }
  }

  private prefixing(): string {
    return this.preFix ? `${this.preFix} ` : '';
  }

  private suffixing(): string {
    return this.suffix ? ` ${this.suffix}` : '';
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

