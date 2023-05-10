import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BasicFormComponent } from './forms/basicForm/basic-form.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { ProviderFormComponent } from './forms/provider-form/provider-form.component';
import { RxFormComponent } from './forms/rxForm/rx-form.component';


const routes: Routes = [{path:'', component: LandingPageComponent}, 
                        {path: 'basicInfo', component: BasicFormComponent},
                        {path: 'addMember', component: MemberFormComponent},
                        {path: 'addProvider', component: ProviderFormComponent},
                        {path: 'addRx', component: RxFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
