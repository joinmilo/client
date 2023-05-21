import { Component, Input } from "@angular/core";
import { Maybe } from "graphql/jsutils/Maybe";

@Component({
  selector: 'app-avatar-placeholder',
  templateUrl: './avatar-placeholder.component.html',
  styleUrls: ['./avatar-placeholder.component.scss'],
})
export class AvatarPlaceholderComponent { 

  @Input()
  public name?: Maybe<string>;
}