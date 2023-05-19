import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BasicFormComponent } from './basicForm/basic-form.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddRxComponent } from './add-rx/add-rx.component';


const routes: Routes = [{path:'', component: LandingPageComponent}, 
                        {path: 'basicInfo', component: BasicFormComponent},
                        {path: 'addMember', component: AddMemberComponent},
                        {path: 'addProvider', component: AddProviderComponent},
                        {path: 'addRx', component: AddRxComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
