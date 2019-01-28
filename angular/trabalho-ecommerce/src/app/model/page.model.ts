export class Page {
    content: Array<any> = [];
    size: number = 0;
    totalElements: number = 0;
    totalPages: number = 0;
    pageNumber: number = 0;

    constructor(size) {
        this.size = size;
    }
}