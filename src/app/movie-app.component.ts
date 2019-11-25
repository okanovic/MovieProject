import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-app',
  template:`
  <div class="container">
    <movie-navbar></movie-navbar>
  </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
    ``
  ]
})
export class MovieAppComponent {

}
