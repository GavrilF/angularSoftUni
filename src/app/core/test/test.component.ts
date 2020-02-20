import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { PostsService } from 'src/app/shared/services/posts.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap, finalize } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';

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
    public postsService: PostsService,
    private userService: AuthService,
    public auth: AngularFireAuth) {


   }

  ngOnInit(): void {
  }



  signup = new FormGroup({
    title: new FormControl(null, [Validators.minLength(8)]),
    category: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.minLength(50)]),
    tags: new FormControl(null,[ Validators.required]),
    image: new FormControl(null, [Validators.required, /*requiredFileType('png')*/]),
  });
  
  submit(){
    this.postService.uploadPost(this.signup.value)
    console.log(this.signup.value)
   

  }
  logData(){
    console.log()
  }
  handleUpload(){

  }

  isLoggedIn(){
    console.log(this.postService.getAllPosts().subscribe(console.log))
  }
  logout(){
    this.userService.signOut()
  }
 
}
