import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "../../model/product.model";
import { ECOMMERCE_API } from "src/app/app.api";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {
  constructor(private http: Http) {}

  products(): Observable<Product[]> {
    return this.http
      .get(`${ECOMMERCE_API}/products`)
      .pipe(map(response => response.json()));
  }

  productsById(id: string): Observable<Product> {
    return this.http
      .get(`${ECOMMERCE_API}/products/${id}`)
      .pipe(map(res => res.json()));
  }

  getMostSold() {
    return this.http
      .get(`${ECOMMERCE_API}/products`)
      .pipe(map(res => res.json()));
  }

  orderBySales(products: Product[], qtdProducts: number): Product[]{
    products.sort((prod1, prod2) => {
      if(prod1.sales > prod2.sales) {
        return -1;
      } else if (prod1.sales < prod2.sales){
        return 1;
      } else {
        return 0;
      }
    });

    return products.slice(0, qtdProducts);
  }
}
