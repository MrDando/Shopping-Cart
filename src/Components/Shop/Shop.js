import React, { useState, useEffect } from 'react'
import './Shop.css'

import Categories from './Categories'
import ProductList from './ProductList'


function Shop() {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')

    useEffect(() => {
        fetchItems()
    },[])
    
    useEffect(() => {
        getCategories()
        filterProductsByCategory()
    },[allProducts])

    useEffect(() => {
        filterProductsByCategory()
    }, [selectedCategory])

    async function fetchItems() {
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        setAllProducts(data)
    }

    function selectCategory(e) {
        setSelectedCategory(e.target.name)
    }

    function getCategories() {
        let newCategories = []

        allProducts.forEach(product => {
            const productCategory = product.category

            if (!newCategories.includes(productCategory)) {
                newCategories.push(productCategory)
            } 
        })

        setCategories(newCategories)
    }

    function filterProductsByCategory() {
        const newFilteredProducts = []

        if (selectedCategory === '') {
            setFilteredProducts(allProducts)
        } else {
            allProducts.forEach(product => {
                if (product.category === selectedCategory) {
                    newFilteredProducts.push(product)
                }
            })

            setFilteredProducts(newFilteredProducts)
        }

    }

    return (
        <div className='shop-container flex'>
            <div className='sidebar'>
                <header>
                    <h2>CATEGORIES</h2>
                </header>
                <div className='category-list'>
                    <div className='category' style={{paddingLeft: 0}}>
                        <button name={''} onClick={selectCategory}>All Products</button>
                    </div>
                    <Categories categories={categories} selectCategory={selectCategory}/>
                </div>
            </div>
            <div>
                <header className='products-header'>
                    <h2>{selectedCategory !== '' ? selectedCategory.toLocaleUpperCase() : 'Showing all Products'} {`(${filteredProducts.length})`}</h2>
                </header>
                <ProductList products={filteredProducts} />
            </div>
        </div>
        
    )
}

export default Shop