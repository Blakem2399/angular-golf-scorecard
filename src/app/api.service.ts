import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import RootObject = namespace.RootObject;
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataFromServer: RootObject;

  private apiUrl: string = 'https://golf-courses-api.herokuapp.com/courses/';


  constructor(private http: HttpClient) { }

getCourse(str: string, cb:Function){
    let url = this.apiUrl+str;
    this.get(url, cb )

}


private get(url: string, cb: Function){
let tmp: any;
this.http.get(url).subscribe(res => {

  this.dataFromServer = <RootObject>res;
  console.log(this.dataFromServer.data);
return this.dataFromServer.data;
});
}


}
