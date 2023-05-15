import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { UserGroupService } from './service/user-group.service';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  constructor(public usersService: UsersService, public userGroupService: UserGroupService) {}

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.groupName = this.userGroupService.getGroupName();
    this.componentRef.instance.members = this.usersService.getUsers().length;

    
    this.componentRef.instance.close.subscribe(()=>{this.viewRef.clear()})

  }
}