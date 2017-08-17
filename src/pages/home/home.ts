import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../tips/tips';
import { MindfulBreathingPage } from '../mindful-breathing/mindful-breathing';
import { ExternalResourcesPage } from '../external-resources/external-resources';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToTips(params){
    if (!params) params = {};
    this.navCtrl.push(TipsPage);
  }goToMindfulBreathing(params){
    if (!params) params = {};
    this.navCtrl.push(MindfulBreathingPage);
  }goToExternalResources(params){
    if (!params) params = {};
    this.navCtrl.push(ExternalResourcesPage);
  }
}
