import { Component } from '@angular/core';
import { UserGroupService } from '../service/user-group.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public userGroupService: UserGroupService) {}
  editGroupName(newGroupName: string) {
    this.userGroupService.setGroupName(newGroupName);
  }
}
