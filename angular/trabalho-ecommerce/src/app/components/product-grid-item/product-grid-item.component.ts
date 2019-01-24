import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/products';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.shoppingCartService.addProductToCart(this.product);
  }

}
