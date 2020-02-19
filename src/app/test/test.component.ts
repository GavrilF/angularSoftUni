import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { IPost } from '../shared/interfaces/IPost';
import { AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map, switchMap, flatMap, throttleTime } from 'rxjs/operators'
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../shared/services/auth.service';
// import 'firebase/firestore';
// import 'firebase/storage';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  allPosts$: Observable<IPost[]>;
  
  
  constructor(private postService: PostsService,private storage: AngularFireStorage,private userService: AuthService) {
   }

  ngOnInit(): void {
  }
isLoggedIn(){
  this.userService.currentUser()
}
 
}
