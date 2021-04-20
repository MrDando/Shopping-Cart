import React, { useState, useEffect } from 'react'
import './Shop.css'

function ProductList(props) {
    const {products} = props

    return (
        <div className='product-list flex'>
            {products.map(product => {
                console.log(product)
                return (
                    <div key={product.id} className='product'>
                        <div className='product-image-container flex justify-center align-center'>
                            <img src={product.image} alt=''></img>
                        </div>
                        <p className='product-title'>{product.title}</p>
                        <p className='product-price'>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchItems()
    },[])

    async function fetchItems() {
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    return (
        <div className='shop-container flex'>
            <div>

            </div>
            <div>
                <ProductList products={products} />
            </div>
        </div>
        
    )
}

export default Shop