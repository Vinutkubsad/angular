import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';



import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { RegdetailComponent } from './regdetail/regdetail.component';
import { EdudetailsComponent } from './edudetails/edudetails.component';


@NgModule({
  declarations: [
    AppComponent,
    RegdetailComponent,
    EdudetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


