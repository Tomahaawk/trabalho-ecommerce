import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart-complete',
  templateUrl: './cart-complete.component.html',
  styleUrls: ['./cart-complete.component.css']
})
export class CartCompleteComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.removeAllCart();
  }

}
