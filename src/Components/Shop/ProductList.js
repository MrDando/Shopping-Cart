import { Link } from 'react-router-dom'

function ProductList(props) {
    const {products, getSelectedProduct } = props
    return (
        <div className='product-list flex'>
            {products.map(product => {
                return (
                    <Link key={product.id} onClick={() => getSelectedProduct(product)} to={`shop/product/${product.id}`}>
                        <div className='product-thumbnail'>
                            <div className='image-container flex justify-center align-center'>
                                <img src={product.image} alt=''></img>
                            </div>
                            <p className='product-title'>{product.title}</p>
                            <p className='product-price'>{product.price}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductList