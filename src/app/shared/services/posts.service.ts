import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { IPost } from '../interfaces/IPost';
import 'firebase/firestore';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import { finalize, tap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { IUser } from '../interfaces/IUser';
import { Router } from '@angular/router';
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  posts: Observable<IPost[]>;
  task:AngularFireUploadTask;
  downloadUrl: string;
  user: IUser
  downloadURL

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private authService: AuthService,
    private router: Router
    ) {
      this.authService.user$.subscribe(user => this.user = user)
    }

  

  getFivePosts(){
    return this.firestore.collection<IPost>('posts',query => {
      return query.orderBy("creationDate","desc").limit(5);
      }).valueChanges({idField: 'id'})
  }

  getAllPosts(){
    return this.firestore.collection<IPost>('posts',query => {
      return query.orderBy("creationDate","desc")
      }).valueChanges({idField: 'id'})
  }

  // The ugliest Code ever but will fix it with rjxs operators
  
  uploadPost(value){
    const {title,category,description,image,tags} = value;
    const randomId = (Math.random() * 100).toString()

    const path = `blogImages/${image.name}`;
    const ref = this.storage.ref(path)
    this.task = this.storage.upload(path,image)
    this.task.snapshotChanges().pipe(
      take(1),
      tap(console.log),
      finalize( async() => {
        this.downloadURL = await ref.getDownloadURL().toPromise().then(res => {

          const currentPost: IPost = {
            uid: this.user.uid,
            creationDate: firebase.firestore.Timestamp.fromDate(new Date),
            title,
            category,
            description,
            tags,
            imgSrc: res,
            imgLoc: "",
            comments: [],
            creator: `${this.user.firstName} ${this.user.lastName}`,
            id: randomId
          }
          this.firestore.collection('posts').doc(randomId).set(currentPost)
            .then(res => {
              this.router.navigate(['']);
              alert('successful update')
            }) 
            .catch(res => console.log(res))
        });

      })).subscribe()
  }


  getPost(postId:string){
    return this.firestore.collection("posts").doc<IPost>(postId).valueChanges()
  }


}
