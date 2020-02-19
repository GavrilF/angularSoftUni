import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private postService: PostsService) { 
    this.posts$ = postService.getAllPosts()
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getAllPosts()
  }

}
