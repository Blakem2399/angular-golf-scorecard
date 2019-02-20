import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private user$: Observable<firebase.User | null>;



  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db:AngularFireDatabase
  ) {
    this.user$ = this.afAuth.authState;
  }


login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((_) =>{
        this.router.navigate([`/settings`])
      })
      .catch(error => console.log('auth ERR', error));
}

logout(){
this.afAuth.auth.signOut();
this.router.navigate([`/home`])
}

}
