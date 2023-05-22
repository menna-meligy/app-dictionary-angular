import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  profilePicUrl = 'path/to/profile-picture.jpg';
  userName = 'John Doe';
}
