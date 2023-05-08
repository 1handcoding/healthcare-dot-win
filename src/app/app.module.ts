import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { BannerBoxComponent } from './banner-box/banner-box.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { StepBoxComponent } from './step-box/step-box.component';
import { FormBoxComponent } from './form-box/form-box.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { LandingPageComponent} from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerBoxComponent,
    ContentBoxComponent,
    FooterBoxComponent,
    StepBoxComponent,
    FormBoxComponent,
    ListBoxComponent,
    LandingPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
