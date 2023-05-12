import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  name = '';
  status = '';
  avatar = '';
  // userForm: FormGroup;
  @Output() addUser = new EventEmitter<{
    name: string;
    status: string;
    avatar: string;
  }>();

  addUserClicked() {
    if (this.status.length > 50) {
      alert('Status cannot be longer than 50 characters!');
      return;
    }
    const user = { name: this.name, status: this.status, avatar: this.avatar };
    this.addUser.emit(user);
    this.name = '';
    this.status = '';
    this.avatar = '';
  }
}
//файл add-post.component.ts
