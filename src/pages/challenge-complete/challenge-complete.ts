import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { ChallengeComplete5Page } from '../challenge-complete5/challenge-complete5';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';
import { NextChallengePage } from '../next-challenge/next-challenge';

@Component({
  selector: 'page-challenge-complete',
  templateUrl: 'challenge-complete.html'
})
export class ChallengeCompletePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToSmileAtSomeDude(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDudePage);
  }goToChallengeComplete(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeCompletePage);
  }goToChallengeComplete5(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete5Page);
  }goToChallengeList4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList4Page);
  }goToNextChallenge(params){
    if (!params) params = {};
    this.navCtrl.push(NextChallengePage);
  }
}
