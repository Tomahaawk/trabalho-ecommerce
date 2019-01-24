import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/products';

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
    this.shoppingCartItems.push(product);
    this.shoppingCartSubject.next(this.shoppingCartItems);
  }

  getCartProducts(): Product[] {
    return this.shoppingCartItems;
  }

  findShoppingCarts() {
    return this.http.get(`http://private-708c2-ecommerce51.apiary-mock.com/shopping-cart`);
  }
}
