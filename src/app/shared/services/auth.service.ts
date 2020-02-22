import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { tap, map, switchMap, finalize, take, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from 'firebase';
import { IUser } from '../interfaces/IUser';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<IUser>;
  task:AngularFireUploadTask;
  downloadURL;


  constructor(
    private afDb: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private storage: AngularFireStorage) {

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
    this.afAuth.signOut().then((res)=> {
    })
    localStorage.removeItem("user");
    this.router.navigate([''])
  };

  getAuthStatus(){
    const user = localStorage.getItem("user");
    return user !== null
  }
  // The trash comes again, wil be fixed later.
  updateProfile(data,uid){
    const {image,firstName,lastName,description} = data;
    const path = `profilePictures/${image.name}`;
    const ref = this.storage.ref(path)
    this.task = this.storage.upload(path,image)
    return this.task.snapshotChanges().pipe(
      take(1),
      tap(console.log),
      finalize( async() => {
        this.downloadURL = await ref.getDownloadURL().toPromise().then(res => {
          const data = {
            picture: res,
            firstName: firstName,
            lastName: lastName,
            description: description
          }
          this.afDb.collection('users').doc(uid).update(data).then(res => {
            this.router.navigate(['profile'])
            alert("Successful update")
          }).catch(err => {console.log(err)})
        })
      })).subscribe()
  }
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
          .then(res => {
            localStorage.setItem("user","true");
            this.router.navigate([''])
          })
          .catch(res => console.log(res))
      })
      .catch(res => alert(res.message))
  }
    
  signInWithEmail(email,password){
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      localStorage.setItem("user","true")
      this.router.navigate(['']);
    }).catch((error)=>{alert("Wrong user credentials")});
  }
}
