import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from '@capacitor-community/admob';
const { AdMob } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private options: AdOptions = {
    adId: 'ca-app-pub-4713371651982959/3124087711',
    adSize: AdSize.BANNER,
    position: AdPosition.BOTTOM_CENTER,
    margin: 0
    // npa: true
  };

  constructor() {
    AdMob.showBanner(this.options);

    // Subscribe Banner Event Listener
    AdMob.addListener('onAdLoaded', (info: boolean) => {
      console.log('Banner Ad Loaded');
    });

    // Get Banner Size
    AdMob.addListener('onAdSize', (info: boolean) => {
      console.log(info);
    });
  }

}
