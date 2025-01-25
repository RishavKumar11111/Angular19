import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <h2 class="text-greet">User Page</h2>
    <p>Hi! This is User Component</p>
  `,
  styles: [
    `.text-greet {
      color: blue
    }`
  ]
})
export class UserComponent {

}
