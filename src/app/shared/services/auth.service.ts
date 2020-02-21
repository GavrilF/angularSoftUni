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
  
  signOut(){
    this.afAuth.signOut().then((res)=> console.log(res)) 
  };

  signUpWithEmail(value){
    // Create user in Firebase Authentication and after this add user data in user collection db;

    const {firstName, lastName, passwordsGroup, email} = value;
    const password = passwordsGroup.password

    // Set placeholder data that will be changed by the user in Profile Settings 
    let description = "";
    let picture = "https://firebasestorage.googleapis.com/v0/b/testproject-dd39a.appspot.com/o/shared%2Fplaceholder.jpg?alt=media&token=75c971e8-a5db-422b-a6ef-cf7b1807b72a";
    let pictureLoc = ""
     
    this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(userAuth => {
        const uid = userAuth.user.uid
        this.afDb.collection('users').doc(uid).set({firstName,lastName,email,picture,pictureLoc,uid,description})
          .then(res => this.router.navigate(['']))
          .catch(res => console.log(res))
      })
      .catch(res => console.log(res))
  }
    
  signInWithEmail(email,password){
    this.afAuth.signInWithEmailAndPassword(email, password).then(res => {console.log(res)});
    this.router.navigate(['']);
  }
}
