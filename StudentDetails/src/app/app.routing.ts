import { Routes , RouterModule } from '@angular/router';

import { RegdetailComponent } from './regdetail/regdetail.component';
import { EdudetailsComponent } from './edudetails/edudetails.component';


 
export const appRoutes: Routes = [
    { path: 'edudetails', component: EdudetailsComponent },
    { path: 'regdetails', component: RegdetailComponent  },
    { path: '', component: RegdetailComponent},
    { path: '**', redirectTo: '' }
];

