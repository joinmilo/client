import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { LabelService } from '../services/label.service';

@Directive({
  selector: '[appLabel]'
})
export class AppLabelDirective implements OnInit, OnDestroy {

  @Input()
  public appLabel?: Maybe<string>;

  @Input()
  public preFix?: string;

  @Input()
  public postFix?: string;

  private destroy = new Subject<void>();

  constructor(
    private el: ElementRef,
    private labelService: LabelService) { }

  public ngOnInit(): void {
    this.labelService.lookup(this.appLabel)
      .subscribe(label => this.el.nativeElement.innerHTML = `${this.preFix ?? ''} ${label ?? ''} ${this.postFix ?? ''}`);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}