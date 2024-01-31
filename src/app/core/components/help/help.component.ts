import { Component } from '@angular/core';
import { Help } from '../../typings/help';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {

  public help?: Help;

}
