import { ShoppingCartService } from './../../services/shopping-cart/shopping-cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCart } from 'src/app/model/shopping-cart';

import { NgForm } from '@angular/forms';

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

  constructor(
    private shoppingCartService:ShoppingCartService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.shoppingCartService.findShoppingCarts().subscribe((list:Array<ShoppingCart>)=>{
      this.listShoppingCarts = list;
      this.calculaTotais(this.listShoppingCarts);
    },err=>{

    });
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
