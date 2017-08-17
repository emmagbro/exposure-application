import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { NextChallengePage } from '../next-challenge/next-challenge';

@Component({
  selector: 'page-challenge-list4',
  templateUrl: 'challenge-list4.html'
})
export class ChallengeList4Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNextChallenge(params){
    if (!params) params = {};
    this.navCtrl.push(NextChallengePage);
  }goToSmileAtSomeDude(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDudePage);
  }goToChallengeComplete(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeCompletePage);
  }goToChallengeList4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList4Page);
  }
}
