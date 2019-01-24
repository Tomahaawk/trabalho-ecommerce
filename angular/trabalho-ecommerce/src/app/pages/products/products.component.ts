import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products-service';
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .products()
      .subscribe(products => (this.products = products));
  }
}
