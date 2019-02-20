import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import RootObject = namespace.RootObject;
import { map } from 'rxjs/operators';

import {Observable} from 'rxjs';
import TeeBox = namespace.TeeBox;
import Hole = namespace.Hole;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public globalCourse: string = '11819';
  public globalTee: number = 0;
  private apiUrl: string = 'https://golf-courses-api.herokuapp.com/courses/';


  constructor(private http: HttpClient) { }

  getTee(): Observable<TeeBox[]> {
    return this.http.get<RootObject>(this.apiUrl+ this.globalCourse)
      .pipe(
        map(
          courseData => {
            return courseData.data.holes[0].teeBoxes;
          }
        )
      );
  }


changeTee(index: number){
    this.globalTee = index;
    return this.globalTee;
}
  getHoleData(): Observable<Hole[]> {
    return this.http.get<RootObject>(this.apiUrl+ this.globalCourse)
      .pipe(
        map(
          courseData => {
            return courseData.data.holes;
          }
        )
      );
  }

  getYards():Observable<number[]> {
    return this.http.get<RootObject>(this.apiUrl+ this.globalCourse)
      .pipe(
        map(
          courseData => {
            let yardArray: number[] = [];
            for (let i = 0; i < courseData.data.holes.length; i++) {
              yardArray.push(courseData.data.holes[i].teeBoxes[this.globalTee].yards)
            }
            return yardArray
          }
        )
      );
  }
  getHandicap():Observable<number[]> {
    return this.http.get<RootObject>(this.apiUrl+ this.globalCourse)
      .pipe(
        map(
          courseData => {
            let hcpArray: number[] = [];
            for (let i = 0; i < courseData.data.holes.length; i++) {
              hcpArray.push(courseData.data.holes[i].teeBoxes[this.globalTee].hcp)
            }
            return hcpArray
          }
        )
      );
  }
  getPar():Observable<number[]> {
    return this.http.get<RootObject>(this.apiUrl+ this.globalCourse)
      .pipe(
        map(
          courseData => {
            let parArray: number[] = [];
            for (let i = 0; i < courseData.data.holes.length; i++) {
              parArray.push(courseData.data.holes[i].teeBoxes[this.globalTee].par)
            }
            return parArray
          }
        )
      );
  }


}
