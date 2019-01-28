import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  )
  { }

  ngOnInit() {
  }

  addToCart() {
    this.shoppingCartService.addProductToCart(this.product);
    this.router.navigate(['/shopping-cart']);
  }

  goToDetails() {
    this.router.navigate(['/products', this.product.id]);
  }

}
