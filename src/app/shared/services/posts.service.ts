import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { IPost } from '../interfaces/IPost';
import 'firebase/firestore';
import 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  posts;
  // : AngularFirestoreCollection<IPost>;
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
    ) {
      this.posts = firestore.collection('posts').valueChanges()
    }
    getPosts(){
      return this.posts
    }
}
