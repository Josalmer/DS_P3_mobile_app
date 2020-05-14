import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/shared/services/login.service';
import { SessionService } from 'src/app/modules/shared/services/session.service';
import { NavController } from '@ionic/angular';
import { UserProfileService } from '../../services/user-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
    private userProfileService: UserProfileService,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(_ => {
      this.loadUser();
    });
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

  async rechargeCash() {
    const alert = await this.alertController.create({
      header: 'Solicitar saldo',
      inputs: [
        {
          name: 'number',
          type: 'number',
          placeholder: '0'
        }
      ],
      buttons: [
        {
          text: 'Solicitar',
          handler: (alertData) => {
            this.userProfileService.recharge(parseFloat(alertData.number)).subscribe(
              response => this.user = response
            );
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
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
