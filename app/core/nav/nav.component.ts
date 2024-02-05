import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  rightMenuOpened

  constructor() { }
  
  ngOnInit(): void {
  }
  
  goToHome(){
    $('body').scrollTo('#home', 300);
  }
  goToAbout(){
    $('body').scrollTo('#about', 0);
  }
  goToServices(){
    $('body').scrollTo('#services', 300);
  }
  goToTestimonials(){
    $('body').scrollTo('#testimonials', 500);
  }
  goToContact(){
    $('body').scrollTo('#contact', 800);
  }
  onActivate(event) {
    window.scroll(0,0);
  }
}