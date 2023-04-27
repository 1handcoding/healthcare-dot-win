import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerBoxComponent } from './banner-box/banner-box.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerBoxComponent,
    ContentBoxComponent,
    FooterBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
