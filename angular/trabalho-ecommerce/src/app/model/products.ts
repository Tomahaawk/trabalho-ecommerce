export interface IProduct {
    id: string,
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export class Product implements IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;

    constructor(product: IProduct) {
        this.id = product.id || '';
        this.name = product.name || '';
        this.price = product.price || 0;
        this.description = product.description || 'Descricao indisponivel';
        this.imageUrl = product.imageUrl || '';
    }
}