import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Maybe } from 'src/schema/schema';
import { Column } from '../typings/table';

@Directive({
  selector: '[appRow]'
})
export class RowDirective<T> implements OnInit {

  @Input()
  public appRow?: Maybe<T>;

  @Input()
  public column?: Column<T>;

  constructor(
    private vc: ViewContainerRef,
    private sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    // const ref = this.vc.element.nativeElement.innerHTML = this.sanitizer.bypassSecurityTrustHtml('<p>test<p>');
    // ref.instance.html = `<p>Today is {{ currentDate | date:"medium" }}</p>`;
  
    // this.vc.createEmbeddedView()
    typeof this.column?.type === 'function'
      ? this.function(this.column?.type(this.appRow as T))
      : this.transform();
  }

  private function(result: Observable<Maybe<string>> | Maybe<string> | undefined): any {
    console.log('test')
  }

  private transform(): string {
    const value = this.column?.field.split('.').reduce((obj, field) => (obj as never)?.[field], this.appRow);
    switch(this.column?.type) {
      case 'BOOLEAN':
        return this.boolean(value as boolean);
      case 'DATE':
        return this.date(value as string);
      case 'DATETIME':
        return this.dateTime(value as string);
      case 'TIME':
        return this.time(value as string);
      default:
        return value as string;
    }
  }

  private boolean(value: boolean): string {
    return value 
      ? `<fa-icon [icon]="['fas', 'check']"></fa-icon>`
      : `<fa-icon [icon]="['fas', 'close']"></fa-icon>`
  }

  private dateTime(value: string): string {
    return `${this.date(value)}, ${this.time(value)}`;
  }

  private date(value: string): string {
    return new Date(value).toLocaleDateString();
  }

  private time(value: string): string {
    return new Date(value).toLocaleTimeString();
  }

}
