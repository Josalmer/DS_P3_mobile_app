import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor( public toastCtrl: ToastController ) {}

  public async showMessage(message: string, color: string) {
    const alert = await this.toastCtrl.create({
      message: message,
      color: color,
      position: 'bottom',
      duration: 6000,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

}
