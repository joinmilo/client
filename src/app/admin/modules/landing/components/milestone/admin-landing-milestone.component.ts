import { Component, Input } from '@angular/core';
import { MilestoneElementEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-admin-landing-milestone',
  templateUrl: './admin-landing-milestone.component.html',
  styleUrls: ['./admin-landing-milestone.component.scss'],
})
export class AdminLandingMilestoneComponent {

  @Input()
  public element?: MilestoneElementEntity;

}
