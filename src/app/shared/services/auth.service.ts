import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  currentUserId

  constructor(
    private afDb: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router) {
      
    }

    nowUser(){
      return this.afAuth.currentUser.then(user => {
        console.log(user)
      })
    }
    //Must Edit
    currentUser(){
      this.afAuth.authState.subscribe(data => this.currentUserId = data.uid)
    }

    signOut(){
      this.afAuth.signOut().then((res)=> console.log(res))
      
    }
    // Must Edit
    getUserData() {
      return this.afDb
        .collection("users")
        .doc(this.currentUserId)
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
