import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostsService) {}

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
  
  ngOnInit(): void {
  }

}
