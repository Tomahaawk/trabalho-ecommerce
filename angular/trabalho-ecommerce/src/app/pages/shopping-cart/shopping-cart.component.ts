import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCart } from 'src/app/model/shopping-cart';

import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/model/products';
import { Guid } from 'src/app/services/shopping-cart/guid';
import { IMG_PRODUCTS } from "../../app.api";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @ViewChild("form")
  form:NgForm

  listShoppingCarts:Array<ShoppingCart>;

  valorTotal:number = 0;
  qtdeItens:number= 0;

  imagePath: string = IMG_PRODUCTS;

  constructor(
    private shoppingCartService:ShoppingCartService,
  ) { }

  ngOnInit() {
    
    this.shoppingCartService.shoppingCartSubscription().pipe(take(1)).subscribe(products => {
      this.listar(products);
    });

  }

  listar(product:Product[]){
    this.listShoppingCarts = new Array();
    for(let prod of product){
      let shopp = new ShoppingCart(
        Guid.newGuid(),
        prod,
        1
      );
      this.listShoppingCarts.push(shopp);
    }
    this.calculaTotais(this.listShoppingCarts);
  }

  calculaTotais(list:Array<ShoppingCart>){
    this.valorTotal = 0;
    this.qtdeItens = 0;
    for(let shopp of list){
      this.valorTotal+=(shopp.product.price *shopp.amount);
      this.qtdeItens+=shopp.amount;
    }
  }

  isBtnMinusDisabled(amount:number){
    if(amount<1){
      return true;
    }
    return false;
  }

  removeListShopp(shopp:ShoppingCart){
    this.listShoppingCarts = this.listShoppingCarts.filter(obj => obj.id !== shopp.id);
    this.calculaTotais(this.listShoppingCarts);
    this.shoppingCartService.removeToCart(shopp.product);
  }

  plusAmount(shopp:ShoppingCart){
    this.listShoppingCarts.find(obj => obj.id == shopp.id).amount = shopp.amount+1;
    this.calculaTotais(this.listShoppingCarts);
  }

  minAmount(shopp:ShoppingCart){
    if(shopp.amount>1){
      this.listShoppingCarts.find(obj => obj.id == shopp.id).amount = shopp.amount-1;
      this.calculaTotais(this.listShoppingCarts);
    }
  }
}
