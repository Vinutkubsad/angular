import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.loginForm = fb.group({
      defaultFormEmail: ['', Validators.required],
      defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  ngOnInit() {
  }

}
