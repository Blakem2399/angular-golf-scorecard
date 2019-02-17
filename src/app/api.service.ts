import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import RootObject = namespace.RootObject;
import { map } from 'rxjs/operators';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private apiUrl: string = 'https://golf-courses-api.herokuapp.com/courses/';


  constructor(private http: HttpClient) { }



getCourse(str: string): Observable<RootObject>{
   return this.http
     .get<RootObject>(this.apiUrl+ str)

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
