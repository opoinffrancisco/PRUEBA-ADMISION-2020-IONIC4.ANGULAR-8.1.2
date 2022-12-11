import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private ENV = environment;

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
