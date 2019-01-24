import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import {ECOMMERCE_API} from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient, private httpDB: Http) { }

  findShoppingCarts() {
    return this.http.get(`http://private-708c2-ecommerce51.apiary-mock.com/shopping-cart`);
  }

  findShoppingCartsDB() {
    return this.http.get(`${ECOMMERCE_API}/products`);
  }
}
