import { Routes, RouterModule } from "@angular/router";
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SinglePostResolver } from '../shared/resolvers/singlePostResolver';

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
        component: PostDetailComponent,
        resolve: {
            post: SinglePostResolver
        }
    },
]

export const PostRoutingModule = RouterModule.forChild(routes);