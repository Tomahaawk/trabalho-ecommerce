import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartItems: Product[] = [];
  private shoppingCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  shoppingCartSubscription(): Observable<Product[]> {
    return this.shoppingCartSubject.asObservable();
  }

  addProductToCart(product: Product) {
    if(this.shoppingCartItems.includes(product) == false){
        this.shoppingCartItems.push(product);
        this.shoppingCartSubject.next(this.shoppingCartItems);
    }
  }

  removeToCart(product: Product) {
    this.shoppingCartItems = this.shoppingCartItems.filter(obj => obj !== product);
    this.shoppingCartSubject.next(this.shoppingCartItems);
  }

  getCartProducts(): Product[] {
    return this.shoppingCartItems;
  }

  findShoppingCarts() {
    return this.http.get(`http://private-708c2-ecommerce51.apiary-mock.com/shopping-cart`);
  }
}
