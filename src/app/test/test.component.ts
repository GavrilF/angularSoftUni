import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { IPost } from '../shared/interfaces/IPost';
import { AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map, switchMap, flatMap, throttleTime } from 'rxjs/operators'
import { AngularFireStorage } from '@angular/fire/storage';
// import 'firebase/firestore';
// import 'firebase/storage';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  filePath = "blogImages/65941710_2399894920105486_7235367009501200059_n.jpg";
  img;
  posts;
  
  constructor(private postService: PostsService,private storage: AngularFireStorage) {
    this.posts = this.postService.getPosts()
      .subscribe(competitors =>{ competitors.map(competitor => console.log(competitor))})
    
   }

  ngOnInit(): void {
  }
  loadPosts(){
   let fileRef = this.storage.ref(this.filePath);
   fileRef.getDownloadURL().subscribe((res)=> {this.img = res})
   
   console.log(this.img)
  }
}
