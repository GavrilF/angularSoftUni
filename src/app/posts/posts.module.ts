import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';



@NgModule({
  declarations: [
    PostsListComponent,
    PostDetailComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
