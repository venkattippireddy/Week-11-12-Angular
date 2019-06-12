export class Product {
    constructor(
        public id: number,
        public name: string = '',
        public description: string = '',
        public version: number = 0,
        public price: number = 0,
        public quantity: number = 0
        ) { }
}