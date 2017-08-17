import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GoalSettingPage } from '../pages/goal-setting/goal-setting';
import { ChallengeListPage } from '../pages/challenge-list/challenge-list';
import { ChallengeList2Page } from '../pages/challenge-list2/challenge-list2';
import { ChallengeList3Page } from '../pages/challenge-list3/challenge-list3';
import { ChallengeList4Page } from '../pages/challenge-list4/challenge-list4';
import { NextChallengePage } from '../pages/next-challenge/next-challenge';
import { SmileAtSomeDudePage } from '../pages/smile-at-some-dude/smile-at-some-dude';
import { QuickAddPage } from '../pages/quick-add/quick-add';
import { ChallengeCompletePage } from '../pages/challenge-complete/challenge-complete';
import { GoalsPage } from '../pages/goals/goals';
import { PastChallengeDetailsPage } from '../pages/past-challenge-details/past-challenge-details';
import { TipsPage } from '../pages/tips/tips';
import { HomePage } from '../pages/home/home';
import { MindfulBreathingPage } from '../pages/mindful-breathing/mindful-breathing';
import { ExternalResourcesPage } from '../pages/external-resources/external-resources';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    GoalSettingPage,
    ChallengeListPage,
    ChallengeList2Page,
    ChallengeList3Page,
    ChallengeList4Page,
    NextChallengePage,
    SmileAtSomeDudePage,
    QuickAddPage,
    ChallengeCompletePage,
    GoalsPage,
    PastChallengeDetailsPage,
    TipsPage,
    HomePage,
    MindfulBreathingPage,
    ExternalResourcesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    GoalSettingPage,
    ChallengeListPage,
    ChallengeList2Page,
    ChallengeList3Page,
    ChallengeList4Page,
    NextChallengePage,
    SmileAtSomeDudePage,
    QuickAddPage,
    ChallengeCompletePage,
    GoalsPage,
    PastChallengeDetailsPage,
    TipsPage,
    HomePage,
    MindfulBreathingPage,
    ExternalResourcesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
