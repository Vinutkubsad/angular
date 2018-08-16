import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';


export const appRoutes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);