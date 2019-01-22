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

  constructor(
    private shoppingCartService:ShoppingCartService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.shoppingCartService.findShoppingCarts().subscribe((list:Array<ShoppingCart>)=>{
      this.listShoppingCarts = list;
      this.calculaValorTotal(this.listShoppingCarts);
    },err=>{

    });
  }

  calculaValorTotal(list:Array<ShoppingCart>){
    for(let shopp of list){
      this.valorTotal+=(shopp.product.price *shopp.amount);
    }
  }
}
