import { Routes, RouterModule } from '@angular/router';

import { StudentDetailComponent } from './student-detail/student-detail/student-detail.component';
import { EduDetailsComponent } from './edu-details/edu-details/edu-details.component';

export const appRoutes: Routes = [

    {path: 'edu-details', component: EduDetailsComponent},
    {path: 'student-detail', component: StudentDetailComponent},
    {path: '', component: StudentDetailComponent},
    {path: '**', redirectTo: ''}
    
];