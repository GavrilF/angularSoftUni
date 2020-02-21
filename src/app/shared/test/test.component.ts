import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


// import 'firebase/firestore';
// import 'firebase/storage';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  
  constructor(private postService: PostsService) {}

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
}
