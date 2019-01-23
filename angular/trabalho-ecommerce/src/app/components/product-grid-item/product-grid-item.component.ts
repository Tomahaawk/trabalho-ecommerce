import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
