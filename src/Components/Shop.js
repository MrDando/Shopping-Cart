import React, { useState, useEffect } from 'react'
import './Shop.css'

function Categories(props) {
    const { categories, selectCategory } = props

    return (
        categories.map(category => {
            const uppercased = category.charAt(0).toUpperCase() + category.slice(1);
            return (
                <div className='category'>
                    <button name={category} onClick={selectCategory}>{uppercased}</button>
                </div>
            )
        })
    )
}

function ProductList(props) {
    const {products} = props

    return (
        <div className='product-list flex'>
            {products.map(product => {
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
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchItems()
    },[])
    
    useEffect(() => {
        getCategories()
    },[products])

    async function fetchItems() {
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    function selectCategory(e) {
        console.log(e.target.name)
    }

    function getCategories() {
        let newCategories = []

        products.forEach(product => {
            const productCategory = product.category

            if (!newCategories.includes(productCategory)) {
                newCategories.push(productCategory)
            } 
        })

        setCategories(newCategories)
    }

    return (
        <div className='shop-container flex'>
            <div className='sidebar'>
                <header>
                    <h2>CATEGORIES</h2>
                </header>
                <div className='category-list'>
                    <Categories categories={categories} selectCategory={selectCategory}/>
                </div>
            </div>
            <div>
                <header className='products-header'>
                    <h2>Showing all Products</h2>
                </header>
                <ProductList products={products} />
            </div>
        </div>
        
    )
}

export default Shop