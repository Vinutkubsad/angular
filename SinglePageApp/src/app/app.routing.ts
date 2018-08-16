import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageDetailComponent } from './pageDetail/pageDetail/page-detail.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pageDeatil', component: PageDetailComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

