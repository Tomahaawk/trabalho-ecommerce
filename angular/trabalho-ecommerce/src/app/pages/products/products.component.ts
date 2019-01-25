import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "../../model/product.model";
import { IMG_PRODUCTS } from "../../app.api";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  imagePath: string = IMG_PRODUCTS;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.products().subscribe(products => {
      this.products = products;
      this.products.forEach(
        element => (element.imageUrl = this.imagePath + element.imageUrl)
      );
    });
  }

  productsByCategory(category: string): Product[] {
    const listProductByCategory: Product[] = [];

    this.products.forEach(element => {
      if (element.category === category) {
        listProductByCategory.push(element);
      }
    });

    return listProductByCategory;
  }
}
