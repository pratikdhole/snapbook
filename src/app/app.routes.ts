import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';

export const routes: Routes = [
    {
        path :"home",component :HomeComponent,
    },
    {
        path :"",component :HomeComponent,
    },
    {
        path :"login",component :LoginComponent,pathMatch: 'full'
    },
    {
        path :'signup',component :SignupComponent,pathMatch: 'full'
    }
];
