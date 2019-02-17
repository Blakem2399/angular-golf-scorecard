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
  public courseData: any;
  public globalCourse: string = '11819';
  public globalTee: number = 0;
  private apiUrl: string = 'https://golf-courses-api.herokuapp.com/courses/';


  constructor(private http: HttpClient) { }

  get(): Observable<RootObject>{

    return this.http
      .get<RootObject>(this.apiUrl+ this.globalCourse)

  }

getTee(): Observable<TeeBox[]>{
  if (this.courseData !== undefined) {
    console.log(this.courseData);
    this.get().subscribe(
      result => this.courseData = result,
      error => console.log('Error :: ' + error)
    );
    return this.courseData.data.holes[0].teeboxes;
  }

}


changeTee(index: number){
    this.globalTee = index;
    return this.globalTee;
}
getHoleData(): Observable<Hole>{
    this.get().subscribe(
      result => this.courseData = result,
      error => console.log('Error :: ' + error)
    );
    return this.courseData

}



// private get(url: string, cb: Function){
// let tmp: any;
// this.http.get(url).subscribe((res) => {
//   this.dataFromServer = <RootObject>res;
//   console.log(this.dataFromServer.data);
//   tmp = this.dataFromServer.data;
//   if (cb != undefined) {
//     cb(tmp)
//   }
// return tmp;
// });
// }


}
