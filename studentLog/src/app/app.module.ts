import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail/student-detail.component';
import { EduDetailsComponent } from './edu-details/edu-details/edu-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    EduDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
