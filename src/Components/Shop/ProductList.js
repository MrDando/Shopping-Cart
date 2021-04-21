function ProductList(props) {
    const {products} = props
    console.log(products)
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

export default ProductList