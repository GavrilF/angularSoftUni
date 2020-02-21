import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: IPost
  constructor(private postService: PostsService,private route: ActivatedRoute) {

  }
  
  ngOnInit(): void {
    this.post = this.route.snapshot.data.post as IPost
  }
 
}
