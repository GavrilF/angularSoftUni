import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afDb: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router) { }

    nowUser(){
      return this.afAuth.currentUser.then(user => {
        console.log(user)
      })
    }
    getUserData() {
      return this.afDb
        .collection("users")
        .doc("M6bQWb4UwDTVDPeRXjnRAQVAlHh1")
        .snapshotChanges()
        .pipe(map(user => user.payload.data()));
    }

    isAuth(){
      return this.afAuth.authState
    }
    signInWithEmail(email,password){
      this.afAuth.signInWithEmailAndPassword(email, password).then(res => {console.log(res)});
      this.router.navigate(['']);
    }
}
