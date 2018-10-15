import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,

} from '@nebular/auth';

import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
     children: [
       {
         path: 'login',
         component: NbLoginComponent,
       },
       {
         path: 'register',
         component: NbRegisterComponent,
       },
       {
         path: 'logout',
         component: LogoutComponent,
       },
       {
         path: 'request-password',
         component: NbRequestPasswordComponent,
       },
       {
         path: 'reset-password',
         component: NbResetPasswordComponent,
       },
     ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
