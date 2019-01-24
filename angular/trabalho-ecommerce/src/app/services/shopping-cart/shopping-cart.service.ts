import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  findShoppingCarts() {
    return this.http.get(`http://private-708c2-ecommerce51.apiary-mock.com/shopping-cart`);
  }
}
