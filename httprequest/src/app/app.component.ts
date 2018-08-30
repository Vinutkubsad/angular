import { Component } from '@angular/core';
import { ServiceService } from './service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employee=[];

  constructor( private service:ServiceService) {}

  ngOnInit() {
  }

  OnClick() {
  this.service.getDetails().subscribe(data=>this.employee=data);
}
}

