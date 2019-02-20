import { Injectable } from '@angular/core';
import {ApiService} from './api/api.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  constructor(
    private fetch: ApiService,
    private db: AngularFireDatabase

  ) {

  }



}
