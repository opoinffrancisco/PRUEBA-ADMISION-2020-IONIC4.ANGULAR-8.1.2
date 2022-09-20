import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions(textLoad) {
    const loading = await this.loadingController.create({
      //  spinner: null,
      //  duration: 5000,
      message: textLoad,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  dismiss() {
    this.loadingController.dismiss();
  }

}