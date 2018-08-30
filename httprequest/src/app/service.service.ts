import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { details } from './deatils';
import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  file :string = '/assets/file1.json';

  constructor( private http: HttpClient ) { }

  getDetails():Observable<details[]> {
    return  this.http.get<details[]>(this.file);
  }
}
