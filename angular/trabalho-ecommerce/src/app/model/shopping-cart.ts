import { Product } from './products';
export class ShoppingCart{
    constructor(
        public id:string,
        public product:Product,
        public amount:number
    ){}
}