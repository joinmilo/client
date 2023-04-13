import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Maybe } from 'src/schema/schema';
import { Column } from '../typings/table';

@Directive({
  selector: '[appRow]'
})
export class RowDirective<T> implements OnInit {

  @Input()
  public appRow?: Maybe<any>;

  @Input()
  public column?: Column<T>;

  constructor(
    private el: ElementRef) { }

  public ngOnInit(): void {
    const value = this.column?.field.split('.').reduce((obj, i) => obj?.[i], this.appRow);
    // let content = '';
    // switch(this.column?.type) {
    //   case 'BOOLEAN':
    //     content = this.boolean(value, )
    //     break;
    //   case 'DATE':

    // }
    this.el.nativeElement.innerHTML = 'test';
  }
}
