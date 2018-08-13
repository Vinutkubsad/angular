import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;
  
  cal_add() {
    console.log(this.num1);
    console.log(this.num2);
    
    this.result = Number(this.num1) + Number(this.num2);
  }

  cal_sub() {
    this.result = this.num1 - this.num2;
  }

  cal_mult() {
    this.result = this.num1 * this.num2;
  }

  cal_devide() {
    this.result = (this.num1) / (this.num2);
  }

  
  constructor() { }

  ngOnInit() {
  }

}
