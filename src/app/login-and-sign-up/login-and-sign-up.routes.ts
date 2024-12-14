import { Routes } from '@angular/router';
import { LoginAndSignUpComponent } from './login-and-sign-up.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [{
  path: '', component: LoginAndSignUpComponent, children: [
    {
      path: '',
      redirectTo: 'activate-account',
      pathMatch: 'full'
    },
    {
      path: 'activate-account',
      component: ActivateAccountComponent,
      data: {
        text: 'Activate Account'
      }
    },
    {
      path: 'log-in',
      component: LogInComponent,
      data: {
        text: 'Log In'
      }
    }
  ]
}];
