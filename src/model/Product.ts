import { Inventory } from "./Inventory"

export class Product {
    constructor(
        private id: number,
        private name: string,
        private inventory: Inventory,
        private isMarketable?: boolean
    ) {}

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getInventory(): Inventory {
        return this.inventory
    }

    public setMarketable(): void {
        const isMarketable = this.getInventory()
        this.isMarketable = isMarketable.getQuantity() as number > 0
        this.getInventory().calculateQuantity()
    }
}