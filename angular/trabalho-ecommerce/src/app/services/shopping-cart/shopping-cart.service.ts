import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  keyLocalStorage = "item_"
  shoppingCartItems: Product[] = [];
  private shoppingCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  shoppingCartSubscription(): Observable<Product[]> {
    return this.shoppingCartSubject.asObservable();
  }

  addProductToCart(product: Product) {
    let isProdutoExiste = false;
    this.shoppingCartItems.forEach(function(item){
      if(product.id === item.id){
        isProdutoExiste = true;
        return;
      }
    });

    if(!isProdutoExiste){
        this.shoppingCartItems.push(product);
        this.shoppingCartSubject.next(this.shoppingCartItems);
    }
  }

  removeAllCart(){
    this.shoppingCartItems.forEach((product) => {
      this.removeQtyItemsOfProduct(product.id)
    })

    this.shoppingCartItems = [];
    this.shoppingCartSubject.next(this.shoppingCartItems)
    // localStorage.clear()
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

  saveQtyItemsOfProduct(productId: string, qty: number){
    const key = this.keyLocalStorage + productId;
    localStorage.setItem(key, String(qty));
  }

  loadQtyItemsOfProduct(productId: string): number {
    const key = this.keyLocalStorage + productId;
    if (localStorage.getItem(key) === null) {
      return 1
    } else {
      return +localStorage.getItem(key);
    }
  }

  removeQtyItemsOfProduct(productId: string){
    const key = this.keyLocalStorage + productId;
    localStorage.removeItem(key);
  }
}
