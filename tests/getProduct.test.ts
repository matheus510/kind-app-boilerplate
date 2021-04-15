import { ProductBusiness } from '../src/business/ProductBusiness'

describe("Testing getProduct ", () => {
    const productDatabase = {}

    test("Should return 'Product Not Found'", () => {

        try {
            const findById = jest.fn((id: number) => null)

            const productDatabase = { findById }
    
            const productBusiness = new ProductBusiness(
                productDatabase as any
            )
    
            const id = 1312
    
            productBusiness.getProduct(id)
    
            expect(findById).toHaveBeenCalledWith(id)
        } catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("Product not found")
        }
    })

    test("Should getProduct", () => {

        try {
            const findById = jest.fn((id: number) => id)

            const productDatabase = { findById }
    
            const productBusiness = new ProductBusiness(
                productDatabase as any
            )
    
            const id = 43265
    
            productBusiness.getProduct(id)
    
            expect(findById).toBe(43265)
            expect(id).toBe(43265)
        } catch (err) {
            expect(err.errorCode).toBeUndefined()
        }
    })
})