import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/shared/services/login.service';
import { SessionService } from 'src/app/modules/shared/services/session.service';
import { NavController } from '@ionic/angular';
import { UserProfileService } from '../../services/user-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html'
})
export class UserProfilePage implements OnInit {

  user: any;
  form: FormGroup;
  submitError: string;

  constructor(
    public fb: FormBuilder,
    private loginService: LoginService,
    private sessionService: SessionService,
    private navCtrl: NavController,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(): void {
    this.userProfileService.getUserProfile().subscribe(
      response => {
        this.user = response;
        this.createForm();
      }
    );
  }

  createForm(): void {
    if (this.form) { return; }

    this.form = this.fb.group({
        email: [this.user.email, [Validators.required, Validators.email]],
        name: [this.user.name, [Validators.required]],
        surname: [this.user.surname, [Validators.required]]
    });
  }

  editProfile(): void {
    this.submitError = undefined;

    const newUserObject = {
        email: this.form.value.email,
        name: this.form.value.name,
        surname: this.form.value.surname
    };

    this.userProfileService.updateProfile(newUserObject).subscribe();
  }

  logout(): void {
    this.loginService.logout().subscribe(
      response => {
        this.sessionService.clearAuthToken();
        this.navCtrl.navigateRoot(['/login']);
      }
    );
  }
}
