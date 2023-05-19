import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { BannerBoxComponent } from './banner-box/banner-box.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { StepBoxComponent } from './step-box/step-box.component';
import { LandingPageComponent} from './landing-page/landing-page.component';

import { AddMemberComponent } from './add-member/add-member.component';
import { MemberFormComponent } from './add-member/member-form/member-form.component';
import { MemberListComponent } from './add-member/member-list.component';

import { AddProviderComponent } from './add-provider/add-provider.component';
import { ProviderFormComponent } from './add-provider/provider-form/provider-form.component';
import { ProviderListComponent } from './add-provider/provider-list/provider-list.component';

import { AddRxComponent } from './add-rx/add-rx.component';
import { RxFormComponent } from './add-rx/rxForm/rx-form.component';

import { HeroesComponent } from './heroes/heroes.component';
import { RxListComponent } from './add-rx/rx-list/rx-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BannerBoxComponent,
    ContentBoxComponent,
    FooterBoxComponent,
    StepBoxComponent,
    LandingPageComponent,
    /*------Add Member------*/
    AddMemberComponent,
    MemberFormComponent,
    MemberListComponent,
    /*------Add Provider------*/
    AddProviderComponent,
    ProviderFormComponent,
    ProviderListComponent,
    /*------Add RX------*/
    AddRxComponent,
    RxFormComponent,
    RxListComponent,
    HeroesComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
