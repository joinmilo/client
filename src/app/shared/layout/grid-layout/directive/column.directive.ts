import { Directive, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';

@Directive({
  selector: '[appAssignColumns]'
})
export class ColumnDirective {

  @Input()
  public appAssignColumns?: Maybe<number>;
  
}
