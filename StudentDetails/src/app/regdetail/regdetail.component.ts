import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-regdetail',
  templateUrl: './regdetail.component.html',
  styleUrls: ['./regdetail.component.css']
})
export class RegdetailComponent implements OnInit {


  constructor( private router : Router) { }


  OnclickNext = function() {
    this.router.navigateByUrl('/edudetails'); 
  }

  ngOnInit() {
  }

}


