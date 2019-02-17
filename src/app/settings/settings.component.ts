import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import RootObject = namespace.RootObject;
import {el} from '@angular/platform-browser/testing/src/browser_util';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public courseData: any;

   teeArray: any[];

  constructor(
    private fetch: ApiService,
    private fb: FormBuilder
  ) { }
  private selectedCourse: string;

  ngOnInit() {
    this.updateCourse('11819')
  }

  updateCourse( str: string) {
    this.fetch.getCourse(str)
      .subscribe(
        result => this.courseData = result,
        error => console.log('Error :: ' + error)
      );
    if (this.courseData !== undefined) {
      console.log(this.courseData);
      this.teeArray = this.courseData.data.holes[0].teeBoxes
    }


  }

}
