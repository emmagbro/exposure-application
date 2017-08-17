import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChallengeList3Page } from '../challenge-list3/challenge-list3';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { NextChallengePage } from '../next-challenge/next-challenge';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';

@Component({
  selector: 'page-challenge-list2',
  templateUrl: 'challenge-list2.html'
})
export class ChallengeList2Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToChallengeList3(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList3Page);
  }goToSmileAtSomeDude(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDudePage);
  }goToChallengeComplete(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeCompletePage);
  }goToNextChallenge(params){
    if (!params) params = {};
    this.navCtrl.push(NextChallengePage);
  }goToChallengeList4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList4Page);
  }
}
