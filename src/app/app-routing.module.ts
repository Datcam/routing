import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyCogiviComponent } from './my-cogivi/my-cogivi.component';
import { CogiviDashboardComponent } from './cogivi-dashboard/cogivi-dashboard.component';
import { ContributeToComponent } from './contribute-to/contribute-to.component';
import { ContributeMemoryComponent } from './contribute-memory/contribute-memory.component';
import { ContributeAppComponent } from './contribute-app/contribute-app.component';
import { ContributeGratitudeComponent } from './contribute-gratitude/contribute-gratitude.component';
import { ContributePortraitComponent } from './contribute-portrait/contribute-portrait.component';
import { ContributePhotoComponent } from './contribute-photo/contribute-photo.component';
import { AllContributionsComponent } from './all-contributions/all-contributions.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { StartCogiviComponent } from './start-cogivi/start-cogivi.component';
import { StartCogivi2Component } from './start-cogivi2/start-cogivi2.component';
import { StartCogivi3Component } from './start-cogivi3/start-cogivi3.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myCogivi', component: MyCogiviComponent },
  { path: 'cogiviDashboard', component: CogiviDashboardComponent },
  { path: 'contributeTo', component: ContributeToComponent },
  { path: 'contributeMemory', component: ContributeMemoryComponent },
  { path: 'contributeApp', component: ContributeAppComponent },
  { path: 'contributeGratitude', component: ContributeGratitudeComponent },
  { path: 'contributePortrait', component: ContributePortraitComponent },
  { path: 'contributePhoto', component: ContributePhotoComponent },
  { path: 'allContributions', component: AllContributionsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankYou', component: ThankYouComponent},
  { path: 'startCogivi', component: StartCogiviComponent},
  { path: 'startCogivi2', component: StartCogivi2Component},
  { path: 'startCogivi3', component: StartCogivi3Component},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent,
    FaqComponent,
    ContactComponent,
    RegisterComponent,
    MyCogiviComponent,
    MyCogiviComponent,
    CogiviDashboardComponent,
    ContributeToComponent,
    ContributeMemoryComponent,
    ContributeAppComponent,
    ContributeGratitudeComponent,
    ContributePortraitComponent,
    ContributePhotoComponent,
    AllContributionsComponent,
    CheckoutComponent,
    ThankYouComponent,
    StartCogiviComponent,
    StartCogivi2Component,
    StartCogivi3Component,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
