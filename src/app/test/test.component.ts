import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { IPost } from '../shared/interfaces/IPost';
import { Observable } from 'rxjs';

import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, first } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/IUser';
// import 'firebase/firestore';
// import 'firebase/storage';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  allPosts$: Observable<IPost[]>;
  currentUser: Observable<IUser>;
  
  constructor(private postService: PostsService,
    private storage: AngularFireStorage,
    public userService: AuthService,
    public auth: AngularFireAuth) {
      this.currentUser = this.userService.user$

   }

  ngOnInit(): void {
  }
isLoggedIn(){
  console.log(this.postService.getAllPosts().subscribe(console.log))
}
logout(){
  this.userService.signOut()
}
 
}
