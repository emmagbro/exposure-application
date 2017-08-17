import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuickAdd7Page } from '../quick-add7/quick-add7';
import { ChallengeComplete5Page } from '../challenge-complete5/challenge-complete5';
import { NextChallengePage } from '../next-challenge/next-challenge';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { SmileAtSomeDude2Page } from '../smile-at-some-dude2/smile-at-some-dude2';
import { SmileAtSomeDude3Page } from '../smile-at-some-dude3/smile-at-some-dude3';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { ChallengeComplete2Page } from '../challenge-complete2/challenge-complete2';
import { ChallengeComplete3Page } from '../challenge-complete3/challenge-complete3';
import { ChallengeComplete4Page } from '../challenge-complete4/challenge-complete4';
import { ChallengeComplete5Page } from '../challenge-complete5/challenge-complete5';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';
import { NextChallengePage } from '../next-challenge/next-challenge';

@Component({
  selector: 'page-quick-add6',
  templateUrl: 'quick-add6.html'
})
export class QuickAdd6Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToQuickAdd7(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd7Page);
  }goToChallengeComplete5(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete5Page);
  }goToNextChallenge(params){
    if (!params) params = {};
    this.navCtrl.push(NextChallengePage);
  }goToSmileAtSomeDude(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDudePage);
  }goToSmileAtSomeDude2(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDude2Page);
  }goToSmileAtSomeDude3(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDude3Page);
  }goToChallengeComplete(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeCompletePage);
  }goToChallengeComplete2(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete2Page);
  }goToChallengeComplete3(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete3Page);
  }goToChallengeComplete4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete4Page);
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
