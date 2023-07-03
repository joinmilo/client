import { Component, Input } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';

@Component({
  selector: 'app-star-evaluation',
  templateUrl: './star-evaluation.component.html',
  styleUrls: ['./star-evaluation.component.scss'],
})
export class StarEvaluationComponent{

  @Input()
  public distribution?: Map<string, number>; 

  @Input()
  public reviewAmount?: Maybe<number>;
}


