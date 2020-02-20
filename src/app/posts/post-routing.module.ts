import { Routes, RouterModule } from "@angular/router";
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: PostsListComponent
    },
    {
        path: "createpost",
        component: CreatePostComponent
    },
    {
        path: ":id",
        component: PostDetailComponent
    },
]

export const PostRoutingModule = RouterModule.forChild(routes);