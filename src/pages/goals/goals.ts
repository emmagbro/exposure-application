import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalSettingPage } from '../goal-setting/goal-setting';
import { ChallengeListPage } from '../challenge-list/challenge-list';
import { ChallengeList2Page } from '../challenge-list2/challenge-list2';
import { ChallengeList3Page } from '../challenge-list3/challenge-list3';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { NextChallengePage } from '../next-challenge/next-challenge';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';
import { PastChallengeDetailsPage } from '../past-challenge-details/past-challenge-details';

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html'
})
export class GoalsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToGoalSetting(params){
    if (!params) params = {};
    this.navCtrl.push(GoalSettingPage);
  }goToChallengeList(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeListPage);
  }goToChallengeList2(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList2Page);
  }goToChallengeList3(params){
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
  }goToPastChallengeDetails(params){
    if (!params) params = {};
    this.navCtrl.push(PastChallengeDetailsPage);
  }
}
