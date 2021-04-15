import { ProductBusiness } from '../src/business/ProductBusiness'
import { InventoryInterface } from '../src/interface/Inventory'
import { WarehouseInterface } from '../src/interface/Warehouse'
import { WarehouseType } from '../src/enum/WarehouseType'

describe("Testing createProduct", () => {
    const productDatabase = {}

    test("Should return 'Invalid input' for empty id", () => {
        expect.assertions(2)

        try {
            const productBusiness = new ProductBusiness(
                productDatabase as any
            )

            const warehouses: WarehouseInterface[] = [
                {
                    locality: 'SP',
                    quantity: 12,
                    type: WarehouseType.ECOMMERCE
                }
            ]

            const inventory: InventoryInterface = {
                warehouses
            }

            productBusiness.createProduct(
                0,
                "produto ficticio",
                inventory
            )

            expect(productBusiness.createProduct).toThrow(Error)
            expect(productBusiness.createProduct).toThrow('Invalid input')
        } catch (err) {
            expect(err.errorCode).toBe(400)
            expect(err.message).toBe("Invalid input")
        }
    })

    test("Should return 'Invalid input' for empty inventory", () => {
        expect.assertions(2)

        try {
            const productBusiness = new ProductBusiness(
                productDatabase as any
            )

            const inventory: InventoryInterface = null as any

            productBusiness.createProduct(
                43265,
                "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
                inventory
            )

            expect(productBusiness.createProduct).toThrow(Error)
            expect(productBusiness.createProduct).toThrow('Invalid input')
        } catch (err) {
            expect(err.errorCode).toBe(400)
            expect(err.message).toBe("Invalid input")
        }
    })

    test("Should return 'Invalid input' for empty name", () => {
        expect.assertions(2)

        try {
            const productBusiness = new ProductBusiness(
                productDatabase as any
            )

            const warehouses: WarehouseInterface[] = [
                {
                    locality: 'SP',
                    quantity: 12,
                    type: WarehouseType.ECOMMERCE
                }
            ]

            const inventory: InventoryInterface = {
                warehouses
            }

            productBusiness.createProduct(
                43265,
                "",
                inventory
            )

            expect(productBusiness.createProduct).toThrow(Error)
            expect(productBusiness.createProduct).toThrow('Invalid input')
        } catch (err) {
            expect(err.errorCode).toBe(400)
            expect(err.message).toBe("Invalid input")
        }
    })

    test("Should create a new product", () => {

        try {
            const productBusiness = new ProductBusiness(
                productDatabase as any
            )

            const warehouses: WarehouseInterface[] = [
                {
                    locality: 'SP',
                    quantity: 12,
                    type: WarehouseType.ECOMMERCE
                }
            ]

            const inventory: InventoryInterface = {
                warehouses
            }

            productBusiness.createProduct(
                43265,
                "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
                inventory
            )

            expect(productBusiness.createProduct).toHaveBeenCalledWith(43265)
            expect(productBusiness.createProduct).toHaveBeenCalledWith("L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g")
        } catch (err) {
            expect(err.errorCode).toBeUndefined()
        }
    })
})
