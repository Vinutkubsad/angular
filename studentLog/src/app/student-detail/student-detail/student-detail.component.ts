import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
//import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  //studentDetails: FormGroup;
  showForm = false;
 public studentdetail:student=new student();
 public education:student=new student();
 
  constructor() { 

  }

  optionsSelect: Array<any>;
  ngOnInit() {
 }
  onNext = function(){
    this.showForm = true;
    //this.rou.navigateByUrl ('/edu-details');
  }
  change(e){
   this.education.list=e;
  }

}
export class student{
  firstName:string;
  middlename:string;
  lastname:string;
  email:string;
  phone:number;
  adress:string;
  adress2:string;
  city:string;
  zip:number;
  check1: string;
  check2: string;
  check3: string;
  b1:string;
  b2:string;
  b3:string;

  c1:string;
  c2:string;
  c3:string;

  d1:string;
  d2:string;
  d3:string;

  e1:string;
  e2:string;
  e3:string;
  list:string;
}

