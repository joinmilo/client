import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BrandIcon } from './typings/brand-icons';
import { RegularIcon } from './typings/regular-icons';
import { SolidIcon } from './typings/solid-icons';

@Component({
  selector: 'app-icon',
  template: ``,
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class IconComponent implements OnChanges {

  @Input({ required: true })
  public icon!: SolidIcon | RegularIcon | BrandIcon;

  @HostBinding('innerHTML')
  public renderedIconHTML?: SafeHtml;

  @Input()
  public size?: string = '1x';

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
  ) {}

  public ngOnChanges(): void {
    const test = `<span class="${this.icon[0]} fa-${this.icon[1]} fa-${this.size}"></span> \n`
    this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(test);
  }
}