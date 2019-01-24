import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/products';
import { ECOMMERCE_API } from 'src/app/app.api';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  constructor(private http: Http) { }

  products(): Observable<Product[]> {
    return this.http
      .get(`${ECOMMERCE_API}/products`)
      .pipe(map(response => response.json()));
  }

  getMostSold() {
    return this.http.get(`${ECOMMERCE_API}/products?sales_gte=2`).pipe(map(res => res.json()));
  }
}