import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { IPost } from '../interfaces/IPost';
import 'firebase/firestore';
import 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  posts: Observable<IPost[]>;
  // : AngularFirestoreCollection<IPost>;
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
    ) {}

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
  getPost(post: IPost){
    return true
  }
}
