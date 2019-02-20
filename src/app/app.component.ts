import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-golf-scorecard';
  events: string[] = [];
  opened: boolean;

  constructor(private authService:AuthService) {

  }


}
