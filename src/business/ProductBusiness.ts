import { Product } from '../model/Product'
import { Inventory } from '../model/Inventory'
import { ProductDb } from '../db/ProductDb'
import { Warehouse } from '../model/Warehouse'
import { InventoryInterface } from '../interface/Inventory'
import { WarehouseInterface } from '../interface/Warehouse'
import { BasicError } from '../error/BasicError'

export class ProductBusiness {
    constructor(
        private productDataBase: ProductDb
    ) { }

    public createProduct(id: number, name: string, inventory: InventoryInterface): void {

        if (!id || !name || !inventory) {
            throw new BasicError("Invalid input", 400)
        }

        const productFound = this.productDataBase.findById(id)

        if (productFound) {
            throw new BasicError("A product with the same SKU already exists", 409)
        }

        this.productDataBase.createProduct(
            new Product(
                id,
                name,
                new Inventory(this.warehousesInterfaceToModel(inventory.warehouses))
            )
        )
    }

    private warehousesInterfaceToModel(warehouses: WarehouseInterface[]): Warehouse[] {

        return warehouses.map((warehouse =>
            new Warehouse(warehouse.locality, warehouse.quantity, warehouse.type)
        ))
    }

    private hasProductById(id: number): boolean {
        const product = this.productDataBase.findById(id)

        return product ? true : false;
    }

    public editProduct(idParams: number, id: number, name: string, inventory: InventoryInterface): void {

        if (!id || !name || !inventory) {
            throw new BasicError("Invalid input", 400)
        }

        if (!this.hasProductById(idParams)) {
            throw new BasicError("Product not found", 404)
        }
        
        this.productDataBase.editProduct(
            idParams, 
            new Product(
                idParams, 
                name, 
                new Inventory(this.warehousesInterfaceToModel(inventory.warehouses))
            )
        )
    }

    public getProduct(id: number): Product {
        const product = this.productDataBase.findById(id)

        if (!product) {
            throw new BasicError("Product not found", 404)
        }

        product.setMarketable()

        return product;
    }

    public deleteProduct(id: number): void {

        const product = this.productDataBase.findById(id)

        if (!product) {
            throw new BasicError("Product Not Found", 404)
        }

        this.productDataBase.deleteProduct(id)
    }
}