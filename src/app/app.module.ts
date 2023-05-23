import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BannerBoxComponent } from './banner-box/banner-box.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { StepBoxComponent } from './step-box/step-box.component';
import { LandingPageComponent} from './landing-page/landing-page.component';

import { AddMemberComponent } from './add-member/add-member.component';
import { MemberFormComponent } from './add-member/member-form/member-form.component';

import { AddProviderComponent } from './add-provider/add-provider.component';
import { ProviderFormComponent } from './add-provider/provider-form/provider-form.component';


import { AddRxComponent } from './add-rx/add-rx.component';
import { RxFormComponent } from './add-rx/rxForm/rx-form.component';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false })
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
    /*------Add Provider------*/
    AddProviderComponent,
    ProviderFormComponent,
    /*------Add RX------*/
    AddRxComponent,
    RxFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
