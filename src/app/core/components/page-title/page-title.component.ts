import { Component, Input } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {

  @Input()
  public title?: string | Maybe<string>;

}
