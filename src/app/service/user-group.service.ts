import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  private groupName: string = 'Healthy lifestyle';

  constructor() { }

  getGroupName() {
    return this.groupName;
  }

  setGroupName(newGroupName: string) {
    this.groupName = newGroupName;
  }
}
