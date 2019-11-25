import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styles: [`
    em{float:right; color:#E05C65}
    .error {border:2px solid #E05C65}
  `]
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(AuthService) public authService: AuthService, private router: Router) { }
  profileForm: FormGroup
  ngOnInit() {
    let firstName = new FormControl(
      this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    let lastName = new FormControl(
      this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['movies'])
    }

  }
  cancel() {
    this.router.navigate(['movies'])
  }

}
