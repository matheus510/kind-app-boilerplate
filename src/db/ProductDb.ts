import { Product } from "../model/Product"
import { ProductHashtable } from "../interface/ProductHashtable"

export class ProductDb {

    private ProductHashtable: ProductHashtable = {}

    public createProduct(product: Product): void {
        this.ProductHashtable[product.getId()] = product
    }

    public findById(id: number): Product | undefined {
        return this.ProductHashtable[id]
    }

    public editProduct(id: number, product: Product): void {
        this.ProductHashtable[id] = product;
    }

    public deleteProduct(id: number): void {
        this.ProductHashtable[id] = undefined
    }
}