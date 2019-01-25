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
      .get(`${ECOMMERCE_API}/products?sales_gte=2`)
      .pipe(map(res => res.json()));
  }
}
