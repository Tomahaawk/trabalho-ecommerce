export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
    amount: number;
    sales: number;
}

export class Product implements IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
    amount: number;
    sales: number;

    constructor(product: IProduct) {
        this.id = product.id || '';
        this.name = product.name || '';
        this.price = product.price || 0;
        this.description = product.description || 'Descricao indisponivel';
        this.category = product.category || '';
        this.imageUrl = product.imageUrl || '';
        this.amount = product.amount || 0;
        this.sales = product.sales || 0;
    }
}
