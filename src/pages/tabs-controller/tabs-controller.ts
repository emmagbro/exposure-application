import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { SmileAtSomeDude2Page } from '../smile-at-some-dude2/smile-at-some-dude2';
import { SmileAtSomeDude3Page } from '../smile-at-some-dude3/smile-at-some-dude3';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { ChallengeComplete2Page } from '../challenge-complete2/challenge-complete2';
import { ChallengeComplete3Page } from '../challenge-complete3/challenge-complete3';
import { ChallengeComplete4Page } from '../challenge-complete4/challenge-complete4';
import { NextChallengePage } from '../next-challenge/next-challenge';
import { GoalSettingPage } from '../goal-setting/goal-setting';
import { ChallengeListPage } from '../challenge-list/challenge-list';
import { ChallengeList2Page } from '../challenge-list2/challenge-list2';
import { ChallengeList3Page } from '../challenge-list3/challenge-list3';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';
import { PastChallengeDetailsPage } from '../past-challenge-details/past-challenge-details';
import { QuickAdd2Page } from '../quick-add2/quick-add2';
import { QuickAdd3Page } from '../quick-add3/quick-add3';
import { QuickAdd4Page } from '../quick-add4/quick-add4';
import { QuickAdd5Page } from '../quick-add5/quick-add5';
import { QuickAdd6Page } from '../quick-add6/quick-add6';
import { QuickAdd7Page } from '../quick-add7/quick-add7';
import { ChallengeComplete5Page } from '../challenge-complete5/challenge-complete5';
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
  }goToQuickAdd2(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd2Page);
  }goToQuickAdd3(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd3Page);
  }goToQuickAdd4(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd4Page);
  }goToQuickAdd5(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd5Page);
  }goToQuickAdd6(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd6Page);
  }goToQuickAdd7(params){
    if (!params) params = {};
    this.navCtrl.push(QuickAdd7Page);
  }goToChallengeComplete5(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete5Page);
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
