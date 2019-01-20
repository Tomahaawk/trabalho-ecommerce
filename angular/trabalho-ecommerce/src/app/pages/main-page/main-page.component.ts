import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  previousItem() {
    $('.carousel').carousel('prev');
  }

  nextItem() {
    $('.carousel').carousel('next');
  }
}
