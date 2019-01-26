import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service";
import { Product } from "../../model/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products/products.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService
      .productsById(this.route.snapshot.params["id"])
      .subscribe(product => (this.product = product));
  }

  addToCart() {
    this.shoppingCartService.addProductToCart(this.product);
  }

  goToCart() {
    this.shoppingCartService.addProductToCart(this.product);
    this.router.navigate(['/shopping-cart']);
  }
}
