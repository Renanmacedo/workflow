import * as React from 'react'
import { faker } from '@faker-js/faker'

const ProductList  = () => {

    const products = Array.from({length: 10}, () => ({ name: faker.commerce.productName(), price: faker.commerce.price() }))

    return (
        <>
        <h1 className='po-text-2xl'>Lista de produtos</h1>
        <ul>
            { products.map(product => <li key={product.name}>{product.name} - {product.price}</li>  )}
        </ul>
        </>
    )
}
export default ProductList;