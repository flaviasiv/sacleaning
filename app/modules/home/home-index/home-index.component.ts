import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
  projects
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    items:1,
    margin:10,
    autoHeight:true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      }
    },
  }

  teamOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    items: 1,
    margin: 0
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if (queryParams.q === 'contact') {
        $('body').scrollTo('#contact', 100); // Scroll screen to target element
      }
      if (queryParams.q === 'services') {
        $('body').scrollTo('#services', 100); // Scroll screen to target element
      }
      if (queryParams.q === 'testimonials') {
        $('body').scrollTo('#testimonials', 100); // Scroll screen to target element
      }
      if (queryParams.q === 'home') {
        $('body').scrollTo(0, 100); // Scroll screen to target element
      }
    });
  }
}
