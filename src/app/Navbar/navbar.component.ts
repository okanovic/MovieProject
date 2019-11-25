import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../Services';

@Component({
  selector: 'movie-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(@Inject(AuthService) public authService: AuthService) { }
  
  
  ngOnInit() {
  }

}
