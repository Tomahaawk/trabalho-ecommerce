import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../../model/product.model';
import { IMG_PRODUCTS } from '../../app.api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  listProductByCategory: Product[] = [];

  categories = ['TODOS', 'Eletrodoméstico',
    'Ar-Condicionado',
    'Ventilador',
    'Liquidificador',
    'TV',
    'Monitor',
    'Smartphone',
    'Cafeteira',
    'Fritadeira'];

  selectedCategory = 'TODOS';

  imagePath: string = IMG_PRODUCTS;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.products().subscribe(products => {
      this.products = products;
      this.products.forEach(
        (element: Product) => {
          element.imageUrl = this.imagePath + element.imageUrl;
          this.listProductByCategory.push(element);
        }
      );
    });
  }





  productsByCategory(category: string): Product[] {
    this.selectedCategory = category;

    this.listProductByCategory = [];

    if (category === 'TODOS') {
      this.products.forEach(element => {
        this.listProductByCategory.push(element);
      });
    } else {
      this.products.forEach(element => {
        if (element.category === category) {
          this.listProductByCategory.push(element);
        }
      });

      return this.listProductByCategory;
    }

  }
}
