import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { NextChallengePage } from '../next-challenge/next-challenge';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';

@Component({
  selector: 'page-smile-at-some-dude',
  templateUrl: 'smile-at-some-dude.html'
})
export class SmileAtSomeDudePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToChallengeComplete(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeCompletePage);
  }goToNextChallenge(params){
    if (!params) params = {};
    this.navCtrl.push(NextChallengePage);
  }goToSmileAtSomeDude(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDudePage);
  }goToChallengeList4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList4Page);
  }
}
