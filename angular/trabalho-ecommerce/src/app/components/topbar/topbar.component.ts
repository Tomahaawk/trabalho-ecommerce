import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnDestroy {
  productsCount: number = 0;
  cartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartSubscription = this.shoppingCartService.shoppingCartSubscription().subscribe(products => {
      this.productsCount = products.length;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

}
