import { Product } from './product.model';
export class ShoppingCart {
    constructor(
        public id: string,
        public product: Product,
        public amount: number
    ) {}
}
