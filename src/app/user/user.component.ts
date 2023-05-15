import { Component, Input } from '@angular/core';
import { UsersService } from '../service/users.service';
import { UserGroupService } from '../service/user-group.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService]
})
export class UserComponent {
  @Input() name = '';
  @Input() status = '';
  @Input() img = '';

  constructor(public usersService: UsersService,
    public userGroupService: UserGroupService) {}

  editName(newName: string) {
    this.usersService.editName(this, newName);
  }

  editStatus(newStatus: string) {
    this.usersService.editStatus(this, newStatus);
  }
}