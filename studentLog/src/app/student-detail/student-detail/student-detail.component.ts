import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
//import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  //studentDetails: FormGroup;

  constructor(private rou:Router) { 
  }

  ngOnInit() {
  }
  onNext = function(){
    this.rou.navigateByUrl ('/edu-details');
  }
  
}
