import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Input() members: number = 0;
  @Input() groupName: string = '';

  @Output() close = new EventEmitter();
}