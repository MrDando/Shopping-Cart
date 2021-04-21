import { Link } from 'react-router-dom'

function ProductList(props) {
    const {products} = props
    console.log(products)
    return (
        <div className='product-list flex'>
            {products.map(product => {
                const params = {
                    pathname: `/shop/product/${product.title}`,
                    state: { productId: product.id },
                }
                return (
                    <Link key={product.id}  to={params} testprop='testing'>
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