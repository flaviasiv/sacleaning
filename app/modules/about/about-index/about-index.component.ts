import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.scss']
})
export class AboutIndexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if (queryParams.q === 'about') {
        $('body').scrollTo(0,0); // Scroll screen to target element
      }
    });
  }

}
