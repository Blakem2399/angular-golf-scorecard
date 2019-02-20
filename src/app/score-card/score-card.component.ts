import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service';
import Hole = namespace.Hole;
import {Player} from '../models/player';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  HOLE_DATA:Hole[];
  displayedColumns =
    ['name', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18','inTotal', 'outTotal','Total'];


  constructor(private fetch: ApiService) { }

  ngOnInit() {
    this.getHoles();
  }

  getHoles(){
    this.fetch.getHoleData().subscribe(
      result => this.HOLE_DATA = result,
      error => console.log('Error :: ' + error)
    )
  }



}



