import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Player} from '../models/player';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private user$: Observable<firebase.User | null>;
  private userData$: AngularFireObject<Player>;



  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db:AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(switchMap(user => {
      if(user) {
        return this.db.doc<Player[]>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));

  }


login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((credential) =>{
        this.updateUserData(credential.user);
        this.router.navigate([`/settings`])
      })
      .catch(error => console.log('auth ERR', error));
}

logout(){
this.afAuth.auth.signOut();
this.router.navigate([`/home`])
}
  private updateUserData(user) {
    let hasRun:boolean = false;
    const userRef: AngularFirestoreDocument<Player> = this.db.doc()
  }
}
