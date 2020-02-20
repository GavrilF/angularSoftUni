import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from 'firebase';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<IUser>


  constructor(
    private afDb: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afDb.doc<IUser>(`users/${user.uid}`)
          .valueChanges()
          // .snapshotChanges().pipe(map((user) =>user.payload.data()))
        } else {
          return of(null)
        }
      }));
     }
    getUserFromCollection(uid){
      return this.afDb.doc(`users/${uid}`).snapshotChanges().pipe(map((user) =>user.payload.data()))
    }
    signOut(){
      this.afAuth.signOut().then((res)=> console.log(res)) 
    };
    
    signInWithEmail(email,password){
      this.afAuth.signInWithEmailAndPassword(email, password).then(res => {console.log(res)});
      this.router.navigate(['']);
    }
}
