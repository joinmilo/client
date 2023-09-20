import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-table-boolean-row',
  template: `
    <fa-icon *ngIf="icon"
      [icon]="icon">
    </fa-icon> `,
})
export class TableRowIconComponent {

  @Input()
  public icon?: IconProp;
}
