import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { NextChallengePage } from '../next-challenge/next-challenge';
import { GoalSettingPage } from '../goal-setting/goal-setting';
import { ChallengeListPage } from '../challenge-list/challenge-list';
import { ChallengeList2Page } from '../challenge-list2/challenge-list2';
import { ChallengeList3Page } from '../challenge-list3/challenge-list3';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';
import { PastChallengeDetailsPage } from '../past-challenge-details/past-challenge-details';
import { TipsPage } from '../tips/tips';
import { MindfulBreathingPage } from '../mindful-breathing/mindful-breathing';
import { ExternalResourcesPage } from '../external-resources/external-resources';
import { HomePage } from '../home/home';
import { GoalsPage } from '../goals/goals';
import { QuickAddPage } from '../quick-add/quick-add';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NextChallengePage;
  tab3Root: any = GoalsPage;
  tab4Root: any = QuickAddPage;
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
  }goToGoals(params){
    if (!params) params = {};
    this.navCtrl.push(GoalsPage);
  }goToGoalSetting(params){
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
  }goToChallengeList4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList4Page);
  }goToPastChallengeDetails(params){
    if (!params) params = {};
    this.navCtrl.push(PastChallengeDetailsPage);
  }goToQuickAdd(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAddPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToTips(params){
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
