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
import { SmileAtSomeDude2Page } from '../pages/smile-at-some-dude2/smile-at-some-dude2';
import { QuickAddPage } from '../pages/quick-add/quick-add';
import { QuickAdd2Page } from '../pages/quick-add2/quick-add2';
import { QuickAdd3Page } from '../pages/quick-add3/quick-add3';
import { QuickAdd4Page } from '../pages/quick-add4/quick-add4';
import { QuickAdd5Page } from '../pages/quick-add5/quick-add5';
import { QuickAdd6Page } from '../pages/quick-add6/quick-add6';
import { QuickAdd7Page } from '../pages/quick-add7/quick-add7';
import { ChallengeCompletePage } from '../pages/challenge-complete/challenge-complete';
import { ChallengeComplete2Page } from '../pages/challenge-complete2/challenge-complete2';
import { ChallengeComplete3Page } from '../pages/challenge-complete3/challenge-complete3';
import { ChallengeComplete4Page } from '../pages/challenge-complete4/challenge-complete4';
import { ChallengeComplete5Page } from '../pages/challenge-complete5/challenge-complete5';
import { GoalsPage } from '../pages/goals/goals';
import { PastChallengeDetailsPage } from '../pages/past-challenge-details/past-challenge-details';
import { TipsPage } from '../pages/tips/tips';
import { HomePage } from '../pages/home/home';
import { SmileAtSomeDude3Page } from '../pages/smile-at-some-dude3/smile-at-some-dude3';
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
    SmileAtSomeDude2Page,
    QuickAddPage,
    QuickAdd2Page,
    QuickAdd3Page,
    QuickAdd4Page,
    QuickAdd5Page,
    QuickAdd6Page,
    QuickAdd7Page,
    ChallengeCompletePage,
    ChallengeComplete2Page,
    ChallengeComplete3Page,
    ChallengeComplete4Page,
    ChallengeComplete5Page,
    GoalsPage,
    PastChallengeDetailsPage,
    TipsPage,
    HomePage,
    SmileAtSomeDude3Page,
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
    SmileAtSomeDude2Page,
    QuickAddPage,
    QuickAdd2Page,
    QuickAdd3Page,
    QuickAdd4Page,
    QuickAdd5Page,
    QuickAdd6Page,
    QuickAdd7Page,
    ChallengeCompletePage,
    ChallengeComplete2Page,
    ChallengeComplete3Page,
    ChallengeComplete4Page,
    ChallengeComplete5Page,
    GoalsPage,
    PastChallengeDetailsPage,
    TipsPage,
    HomePage,
    SmileAtSomeDude3Page,
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