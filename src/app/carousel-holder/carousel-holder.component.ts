import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {
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


  slidesStore = [
    {
      id:"1",
      src: '../../assets/new.jpg',
      alt: "yo yoo",
      title: "tuk sum",
      creationDate: '11/12/2020'
    },
    {
      id:"2",
      src: "https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg",
      alt: "yo yoo",
      title: "tuk sum"
    },
    {
      id:"3",
      src: "https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612",
      alt: "yo yoo",
      title: "tuk sum"
    },
    {
      id:"4",
      src: "https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612",
      alt: "yo yoo",
      title: "tuk sum"
    },
    {
      id:"5",
      src: "https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612",
      alt: "yo yoo",
      title: "tuk sum"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
