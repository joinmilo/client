import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHelp } from '../../state/selectors/core.selectors';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {

  public help = this.store.select(selectHelp);

  constructor(
    private store: Store,
  ) {
    
  }

}
