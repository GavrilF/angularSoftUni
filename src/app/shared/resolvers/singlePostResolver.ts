import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IPost } from '../interfaces/IPost';
import { Observable, throwError, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { take, map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class SinglePostResolver implements Resolve<IPost>{

    constructor(private postService: PostsService,private router: Router){}
    
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> {
        let id = route.paramMap.get('id');
        return this.postService.getPost(id).pipe(
            take(1),
            map((post: IPost) => {
                if(post){
                    return post;
                }
                console.log(`product was not found ${id}`);
                this.router.navigate(['not-found'])
                return null
            })
            );
    }
    

}
