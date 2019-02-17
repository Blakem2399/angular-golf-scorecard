import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import RootObject = namespace.RootObject;
import {el} from '@angular/platform-browser/testing/src/browser_util';
import TeeBox = namespace.TeeBox;


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


   teeArray: TeeBox[];

  constructor(
    private fetch: ApiService,
    private fb: FormBuilder
  ) { }
  private selectedCourse: string;

  ngOnInit() {
    this.getTee()
  }

  updateCourse(str: string) {
    this.fetch.globalCourse = str;
    this.getTee();
  }
  getTee(){
    this.fetch.getTee().subscribe(
      result => this.teeArray = result,
      error => console.log('Error :: ' + error)
    )
  }
changeTee(index: number){
    this.fetch.changeTee(index);

}

}
