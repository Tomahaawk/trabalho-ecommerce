import { Product } from './products';
export class ShoppingCart{
    constructor(
        public product:Product,
        public amount:number
    ){}
}