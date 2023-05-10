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
import { MemberFormComponent } from './member-form/member-form.component';

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
    MemberFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
