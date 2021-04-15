import { ProductBusiness } from '../src/business/ProductBusiness'

describe("Testing ProductBusiness.deleteProduct", () => {
    const productDatabase = {};

    test("Should return 'Product Not Found'", () => {

        try {
            const findById = jest.fn((id: number) => null)

            const productDatabase = { findById }
    
            const productBusiness = new ProductBusiness(
                productDatabase as any
            );
    
            const id = 1312
    
            productBusiness.getProduct(id)
    
            expect(findById).toHaveBeenCalledWith(id);
            expect(findById).toThrow(Error)
        } catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("Product not found")
        }
    })

    test("Should deleteProduct", () => {

        try {
            const findById = jest.fn((id: number) => null)

            const productDatabase = { findById }
    
            const productBusiness = new ProductBusiness(
                productDatabase as any
            );
    
            const id = 1312
    
            productBusiness.getProduct(id)
    
            expect(findById).toBe(1312)
            expect(id).toBe(1312)
        } catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("Product not found")
        }
    })
})