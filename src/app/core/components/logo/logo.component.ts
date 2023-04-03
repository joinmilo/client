import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoConfig, logoTextConfig } from '../../constants/core.constants';
import { selectConfiguration } from '../../state/core.selectors';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  public logoConfig = this.store.select(selectConfiguration(logoConfig)); 

  public logoTextConfig = this.store.select(selectConfiguration(logoTextConfig)); 

  constructor(
    private store: Store,
  ) {}
  
}
