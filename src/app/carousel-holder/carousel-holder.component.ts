import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { PostsService } from '../shared/services/posts.service';
import { Observable } from 'rxjs';
import { IPost } from '../shared/interfaces/IPost';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {

  slidesStore$: Observable<IPost[]>;

  customOptions: OwlOptions = {
    items: 5,
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
  }

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // Load latest 5 posts from db in carousel
    this.slidesStore$ = this.postsService.getFivePosts()
  }

}
