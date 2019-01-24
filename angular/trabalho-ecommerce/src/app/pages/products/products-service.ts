import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/products';
import { ECOMMERCE_API } from 'src/app/app.api';
import { map } from 'rxjs/operators';

export class ProductsService {
  constructor(private http: Http) {}

  products(): Observable<Product[]> {
    return this.http
      .get(`${ECOMMERCE_API}/products`)
      .pipe(map(response => response.json()));
  }
}
