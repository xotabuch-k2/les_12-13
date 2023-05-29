import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title = 'High-Performance Computing';
  text = 'VRWorks™ is a comprehensive suite of APIs, libraries, and engines that enable application and headset developers to create amazing virtual reality experiences. VRWorks enables a new level of presence by bringing physically realistic visuals, sound, touch interactions, and simulated environments to virtual reality.';
}
