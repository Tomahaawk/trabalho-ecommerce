import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
	mostSoldProducts: Array<Product> = [];
	mostSoldProductsAux: Array<Product> = [];
	readonly itemsPerPage: number = 4;
	currentPage: number = 1;
	totalPages: number;

	constructor(private productsService: ProductsService, private router: Router) { }

	ngOnInit() {
		this.productsService.getMostSold().subscribe((res: Array<any>) => {
			this.mostSoldProducts = res.map(item => new Product(item));
			this.totalPages = Math.ceil(this.mostSoldProducts.length / this.itemsPerPage);
			this.mostSoldProductsAux = this.productsService.orderBySales(this.mostSoldProducts, 12).slice(0, this.itemsPerPage);
		});
	}

	goToDetails(id: string) {
		this.router.navigate(['/products', id]);
	}

	nextMostSoldItems() {
		if(this.currentPage === this.totalPages) return;
		this.currentPage++;
		const start = (this.currentPage - 1) * this.itemsPerPage;
		const end = start + this.itemsPerPage;
		this.mostSoldProductsAux = this.mostSoldProducts.slice(start, end);
	}

	previousMostSoldItems() {
		if(this.currentPage === 1) return;
		this.currentPage--;
		const start = (this.currentPage - 1) * this.itemsPerPage;
		const end = start + this.itemsPerPage;
		this.mostSoldProductsAux = this.mostSoldProducts.slice(start, end);
	}
}
