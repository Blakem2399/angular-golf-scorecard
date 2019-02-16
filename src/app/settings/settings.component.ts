import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
courseForm:FormGroup;



  constructor(
    private fetch: ApiService,
    private fb: FormBuilder
  ) { }
  private selectedCourse: string;

  ngOnInit() {
  }

  updateCourse( str: string) {
this.fetch.getCourse(str, (res)=> console.log(res))
  }

}
