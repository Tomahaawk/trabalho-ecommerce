import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/products';
declare var $: any;

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
	products: Array<Product> = [
		new Product(<Product>{}),
		new Product(<Product>{})
	];

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
