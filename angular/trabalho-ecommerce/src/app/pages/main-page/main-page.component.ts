import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../products/products.service';
declare var $: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mostSoldProducts: Array<Product> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getMostSold().subscribe((res: Array<any>) => {
      this.mostSoldProducts = res.map(item => new Product(item));
      console.log(this.mostSoldProducts);
    });
  }

  previousItem() {
    $('.carousel').carousel('prev');
  }

  nextItem() {
    $('.carousel').carousel('next');
  }

  addToCart(product) {
    console.log(product);
  }
}
